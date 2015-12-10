// --------- Board ----------

function Board( width, height, timeStep )
{
  this.height = height;
  this.width = width;
  this.timeStep = timeStep;

  this.scaleX = 20;
  this.scaleY = 20;

  this.shipColumn = 1;
  this.margin = 10;


  // Rows are held in a barrel array - so for example, the zeroth element will not often
  // be at the top of the board.
  this.rows = new Array( this.height );

  this.isDead = true;
}


Board.prototype.init = function( )
{
  var i;
  for ( i = 0; i < this.height; i ++ ) {
    this.rows[ i ] = new Row( this, i );
  }

  this.barrelTop = 0;
  this.barrelBottom = this.height -1;
  this.score = 0;
  this.isDead = false;
}


Board.prototype.generate = function( doc )
{
  if ( doc == null ) {
    doc = document;
  }

  doc.writeln( '<div class="board" style="width: ' + (this.margin * 2 + this.width * this.scaleX) + 'px; height: ' + (this.margin * 2 + this.height * this.scaleY) + 'px;">' );
  doc.writeln( '<img id="ship" class="ship" src="ship.png" alt=""/>' );
  var i;
  for ( i = 0; i < this.height; i ++ ) {
    doc.writeln( '<img id="rain' + i + '"class="rain" src="rain.png" alt=""/>' );
  }

  doc.writeln( '</div>' );
}

Board.prototype.getScreenX = function( column )
{
  return column * this.scaleX + this.margin;
}
Board.prototype.getScreenY = function( index )
{
  if ( index >= this.barrelTop ) {
    return (index - this.barrelTop) * this.scaleY + this.margin;
  } else {
    return (this.height + index - this.barrelTop) * this.scaleY + this.margin;
  }
}

Board.prototype.getShipY = function( index )
{
  return this.height * this.scaleY + this.margin;
}

Board.prototype.getBoardX = function( screenX )
{
  return Math.round( (screenX - this.margin) / this.scaleX );
}

Board.prototype.redraw = function( )
{
  var i;

  for ( i = 0; i < this.height; i ++ ) {
    this.rows[ i ].show();
  }

  if ( this.shipImage == null ) {
    this.shipImage = ww_findObj( "ship" );
    this.shipImage.style.visibility = "visible";
    this.shipImage.style.top = this.getScreenY( this.height - 1 ) + "px";
  }

  this.shipImage.style.left = this.getScreenX( this.shipColumn ) + "px";

}

Board.prototype.moveDown = function( )
{
  this.barrelTop --;
  this.barrelBottom --;
  if ( this.barrelTop < 0 ) {
    this.barrelTop = this.height - 1;
  }
  if ( this.barrelBottom < 0 ) {
    this.barrelBottom = this.height - 1;
  }
  this.score ++;
  this.rows[ this.barrelTop ].makeRain();

  if ( this.shipColumn == this.rows[ this.barrelBottom ].column ) {
    this.isDead = true;
  }
}

// ---------- Row ----------

function Row( board, index )
{
  this.board = board;
  this.index = index;
  this.column = -1;
}

Row.prototype.show = function()
{
  if ( this.image == null ) {
    this.image = ww_findObj( "rain" + this.index );
  }


  if ( this.column < 0 ) {
    this.image.style.visibility = "hidden";
  } else {
    this.image.style.left = this.board.getScreenX( this.column ) + "px";
    this.image.style.top = this.board.getScreenY( this.index ) + "px";
    this.image.style.visibility = "visible";
  }

}

Row.prototype.makeRain = function()
{
  this.column = this.random( this.board.width );
}

Row.prototype.random = function( n )
{
  var result = Math.floor( Math.random() * n );
  if ( result >= n ) result = 0;

  return result;
}

// ---------- Controller ----------

function Controller( board )
{
  this.board = board;

  this.mouseX = 0;
}


Controller.prototype.nextTick = function( timeStep )
{
  window.setTimeout(  "controller.tick();", timeStep );
}

Controller.prototype.tick = function()
{
  if ( ! this.board.isDead ) {
    var x = this.board.getBoardX( this.mouseX );
    if ( x < 0 ) x = 0;
    if ( x >= this.board.width ) x = this.board.width - 1;
    this.board.shipColumn = x;
  }

  this.board.moveDown();
  this.board.redraw();

  if ( this.board.isDead ) {
    alert( "You scored " + this.board.score + " points" );
  } else {
    this.nextTick( this.board.timeStep );
  }

  return false;
}

Controller.prototype.begin = function()
{
  if ( this.board.isDead ) {
    this.board.init();
    this.board.redraw();
    this.nextTick( 1000 );
  }

  return false;
}


Controller.prototype.eventToX = function( event )
{
  // MORE - this isn't cross browser compatable.
  return event.pageX - 32;
}

Controller.prototype.onMouseMove = function( event )
{
  this.mouseX = this.eventToX( event );

  return false;
}


// ---------- end ----------

