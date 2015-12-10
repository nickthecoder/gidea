function Game( board )
{
  this.document = document;
  this.board = board;

  this.wordStarted = false;
  this.lastX = 0;
  this.lastY = 0;
  this.word = "";
  this.tilesClicked = new Array();

  this.secondsRemaining = 240;

  this.score = 0;
  this.scoreFactors = [ 1, 1, 2, 5, 10, 20, 30, 50, 75, 100 ];
}

Game.create = function( doc, width, height )
{
  if ( doc == null ) {
    doc = document;
  }

  var board = new Board( width, height );
  var game = new Game( board )

  board.document = doc;
  game.document = doc;

  return game;
}

Game.prototype.onClickTile = function( x, y )
{
  // alert( "Clicked " + x + "," + y + " = " + this.board.getTile( x, y ).letter.character );

  if ( this.secondsRemaining == 0 ) {
    return;
  }

  if ( this.isEndOfWord( x, y ) ) {

    this.completeWord();

  } else {
    if ( this.canExtend( x, y ) ) {
      this.extend( x, y );
    }
  }

}

Game.prototype.completeWord = function()
{
  if ( this.checkWord() ) {
    this.removeWord();
  } else {
    this.cancelWord();
  }
}


Game.prototype.isEndOfWord = function( x, y )
{
  return (x == this.lastX) && (y == this.lastY) && (this.wordStarted);
}


Game.prototype.removeWord = function()
{
  this.wordStarted = false;
  this.word = "";

  var n, tile;
  var letterScore = 0;

  for ( n = 0; n < this.tilesClicked.length; n ++ ) {
    tile = this.tilesClicked[ n ];
    letterScore += tile.letter.points;
    board.removeTile( tile );
  }

  this.addScore( this.tilesClicked.length, letterScore );
}

Game.prototype.addScore = function( wordLength, letterScore )
{

  if ( wordLength >= this.scoreFactors.length ) {
    wordLength = this.scoreFactors.length - 1;
  }

  this.setScore( this.score + this.scoreFactors[ wordLength ] * letterScore );

}

Game.prototype.setScore = function( score )
{
  this.score = score;

  this.drawNumber( score, 5, "score_" );
}

Game.prototype.drawNumber = function( number, digits, name )
{
  var text = "0000000000" + number;
  text = text.substring( text.length - digits );

  this.drawString( text, name );
}

Game.prototype.drawString = function( text, name )
{
  var i;
  for ( i = 0; i < text.length; i ++ ) {
    var image = ww_findObj( name + i, this.document );
    var png = "images/" + text.substring( i, i + 1 ) + ".png";
    image.src = png;
  }
}

Game.prototype.start = function( )
{
  this.tick();
}

Game.prototype.tick = function( )
{
  this.secondsRemaining --;
  this.drawNumber( this.secondsRemaining, 4, "time_" );

  if ( this.secondsRemaining > 0 ) {
    setTimeout( "game.tick()", 1000 );
  } else {
    this.endGame();
  }
}


Game.prototype.endGame = function()
{
  var i, j;

  for ( i = 0; i < this.board.width; i ++ ) {
    for( j = 0; j < this.board.height; j ++ ) {
      this.board.getTile(i, j).setDown();
    }
  }

  this.secondsRemaining = 0;
  ww_findObj( "status", this.document ).className = "gameOver";
}

Game.prototype.quit = function()
{
  this.secondsRemaining = 0;
}

Game.prototype.cancelWord = function()
{
  this.wordStarted = false;
  this.word = "";

  var n, tile;

  for ( n = 0; n < this.tilesClicked.length; n ++ ) {
    tile = this.tilesClicked[ n ];
    tile.setUp();
  }
}

Game.prototype.canExtend = function( x, y )
{
  // Can't click an empty space.
  if ( this.board.getTile( x, y ).letter == null ) {
    return false;
  }

  // Can't click on a tile that is already clicked
  if ( this.board.getTile( x, y ).isDown ) {
    return false;
  }

  // The first letter can be anywhere on the board
  if ( ! this.wordStarted ) {
    return true
  }

  // Subsequent letters must be touching the previous one.
  var dx = Math.abs( this.lastX - x );
  var dy = Math.abs( this.lastY - y );

  return (dx < 2) && (dy < 2);
}

Game.prototype.extend = function( x, y )
{
  this.lastX = x;
  this.lastY = y;

  if ( ! this.wordStarted ) {
    // alert( "starting new word" );
    this.word = "";
    this.tilesClicked = new Array();
    this.wordStarted = true;
  }

  var tile = this.board.getTile( x, y );
  this.tilesClicked[ this.tilesClicked.length ] = tile;
  tile.setDown();

  this.word = this.word + tile.letter.character;

  // alert( "word (" + this.word + ") length = " + this.tilesClicked.length );
}


Game.prototype.checkWord = function()
{
  //testDictionary( this.word );
  return dictionary.exists( this.word );

}

dictionaryLoaded = false;

function setDictionaryLoaded( value )
{
  if ( value != null ) {
    dictionaryLoaded = value;
  }

  var loadedDiv = ww_findObj( "loadedDiv", main.document );
  if ( loadedDiv != null ) {
    loadedDiv.style.visibility = dictionaryLoaded ? "visible" : "hidden";
  }

  var loadedDiv = ww_findObj( "loadingDiv", main.document );
  if ( loadedDiv != null ) {
    loadedDiv.style.visibility = dictionaryLoaded ? "hidden" : "visible";
  }
}

Game.prototype.adjustPosition = function( imgName, doc )
{
  var img = ww_findObj( imgName, this.document );

  game.board.setOffsets(  img.offsetLeft, img.offsetTop );
}




