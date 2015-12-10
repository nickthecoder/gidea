
function getUniqueId()
{
  getUniqueId.latestId ++;
  return "id" + getUniqueId.latestId;
}
getUniqueId.latestId = 0;



function slidingBlocksPopup( page )
{
  var url = document.location.toString();
  url = url.replace( /slidingblocks.*/, "slidingblocks/" + page );

  window.open( url );
}

solution = null;
board = null;

/* -------------- Board ------------- */


function Board( width, height, scaleX, scaleY, marginX, marginY, doc )
{
  if (doc == null) {
    doc = document;
  }
  this.visible = true;
  this.doc = doc;
  this.baseUrl = this.doc.location.toString().replace( /index.jsp.*/, "" );
  this.controller = CreatePlayController( this );

  this.width = width; // The number of elements across the grid.
  this.height = height;  // The number of elements down the grid

  this.scaleX = scaleX; // The width of each element in pixels
  this.scaleY = scaleY; // The height of each element in pixels

  this.marginX = marginX; // The margin on the left of the background image
  this.marginY = marginY;

  this.offsetX = 0; // The position of the background image relative to the page.
  this.offset = 0; // This is evaluated when board.positionPieces is called.

  this.rows = new Array( height ); // The 2D array which make up the grid.
  this.pieces = new Array();
  this.pieceMap = new Object();

  var x, y;
  for ( y = 0; y < height; y ++ ) {
    this.rows[ y ] = new Array( width );
    for ( x = 0; x < width; x ++ ) {
      (this.rows[ y ])[ x ] = Board.EMPTY;
    }
  }
}



Board.EMPTY = " ";

Board.prototype.clone = function( )
{
  var cloned = new Board( this.width, this.height, this.scaleX, this.scaleY, this.marginX, this.marginY, this.doc );

  cloned.baseUrl = this.baseUrl;
  cloned.background = this.background;

  var i;
  for ( i = 0; i < this.pieces.length; i ++ ) {
    var boardPiece = this.pieces[ i ];

    cloned.addPiece( boardPiece.piece, boardPiece.coord.x, boardPiece.coord.y, boardPiece.id );

  }

  return cloned;
}

Board.prototype.addPiece = function( piece, x, y, id )
{
  var boardPiece = new BoardPiece( this, piece, x, y, id );
  this.pieces[ this.pieces.length ] = boardPiece;
  this.pieceMap[ boardPiece.id ] = boardPiece;
}


Board.prototype.setFixed = function( x, y )
{
  var fixedPiece = new Piece( "X", null );
  fixedPiece.addElement( 0, 0 );

  var boardPiece = new BoardPiece( this, fixedPiece, x, y );
  boardPiece.isFixed = true;
  this.pieces[ this.pieces.length ] = boardPiece;
}




Board.prototype.getPieceAt = function( x, y )
{
  if ( ! this.insideGrid( x, y ) ) {
    return null;
  }
  return (this.rows[ y ])[ x ];
}
Board.prototype.isEmptyAt = function( x, y )
{
  return this.getPieceAt( x, y ) == Board.EMPTY;
}


Board.prototype.setPieceAt = function( boardPiece, x, y )
{
  if ( ! this.insideGrid( x, y ) ) {
    alert( "Attempted to place piece outside the board. Piece = " + boardPiece.piece.label );
  } else {
    (this.rows[ y ])[ x ] = boardPiece;
  }
}

Board.prototype.setEmptyAt = function( x, y )
{
  this.setPieceAt( Board.EMPTY, x, y );
}




Board.prototype.toString = function()
{
  var result = "";

  var x, y;


  for ( y = 0; y < this.height; y ++ ) {

    for ( x = 0; x < this.width; x ++ ) {


      if ( this.isEmptyAt( x, y ) ) {
        result = result + "o ";
      } else {
        result = result + this.getPieceAt( x, y ).piece.label + " ";
      }
    }

    result = result + "\n";

  }

  return result;
}



Board.prototype.generatePieceKey = function( doc )
{
  if ( doc == null ) {
    doc = this.doc;
  }

  var i;

  var html = "";
  
  html += '<table class="pieceKey">';
  html += '<tr>';
  for ( i = 0; i < this.pieces.length; i ++ ) {

    var piece = this.pieces[ i ].piece;

    if ( piece.image != null ) {
      html += '<td>';
      html += ' <img alt="' + this.pieces[ i ].id +'" src="' + this.baseUrl + piece.image + '"/>';
      html += '<br/>';
      html += this.pieces[ i ].id;
      html += '</td>';
    }
  }
  html += '</tr>';
  html +='</table>';

  return html;
}

Board.prototype.generate = function()
{

  var playArea = ww_findObj( "playArea" );
  var html = '<div id="pieces">\n';
  for ( var i = 0; i < this.pieces.length; i ++ ) {

    var piece = this.pieces[ i ].piece;

    if ( piece.image != null ) {
      html += '<img class="piece" id="' + this.pieces[i].id + '" alt="' + piece.label +'" src="' + this.baseUrl + piece.image + '"/>\n';
    }

  }
  html += "</div>\n";

  html += '<div id="glass">\n';
  html += '<img alt="background" src="' + this.baseUrl + this.background + '"/>';
  html += '</div>\n';

  html += '<img id="boardBackground" alt="background" src="' + this.baseUrl + this.background + '"/>';
  
  html += '</div>';
  playArea.innerHTML = html;

  var glass = ww_findObj( "glass" );
  glass.onmousedown = function( event ) { return board.controller.mouseDown( event ); };
  glass.onmouseup   = function( event ) { return board.controller.mouseUp(   event ); };
  glass.onmousemove = function( event ) { return board.controller.mouseMove( event ); };
  
}

Board.prototype.positionPieces = function( )
{
  var i;
  var background = ww_findObj( "boardBackground", this.doc );

  this.offsetX = background.pageX;
  this.offsetY = background.pageY;
  
  for ( i = 0; i < this.pieces.length; i ++ ) {

    var boardPiece = this.pieces[ i ];
    var screenCoord = this.gameToScreen( this.pieces[ i ].coord );

    // alert( "Looking for piece : " + boardPiece.id );
    var img = ww_findObj( boardPiece.id, this.doc );
    if ( img != null ) {
      img.style.left = screenCoord.x + "px";
      img.style.top = screenCoord.y + "px";
      img.style.visibility = "visible";
    }

  }
}

Board.prototype.gameToScreen = function( coord )
{
  var result = new Coord( 0, 0 );
  result.x = coord.x * this.scaleX + this.marginX;
  result.y = coord.y * this.scaleY + this.marginY;

  return result;
}

Board.prototype.screenToGame = function( coord )
{
  var result = new Coord( 0, 0 );
  result.x = Math.floor( (coord.x - this.offsetX - this.marginX) / this.scaleX);
  result.y = Math.floor( (coord.y - this.offsetY - this.marginY) / this.scaleY);

  return result;
}


Board.prototype.containerToGame = function( coord )
{
  var result = new Coord( 0, 0 );
  result.x = Math.floor( (coord.x - this.marginX) / this.scaleX);
  result.y = Math.floor( (coord.y - this.marginY) / this.scaleY);
  
  return result;
}

Board.prototype.eventToScreen = function( event )
{
  return new Coord( event.screenX, event.screenY );
}

Board.prototype.toString = function()
{
  var result = "";

  var x, y;


  for ( y = 0; y < this.height; y ++ ) {

    for ( x = 0; x < this.width; x ++ ) {


      if ( this.isEmptyAt( x, y ) ) {
        result = result + "o ";
      } else {
        result = result + this.getPieceAt( x, y ).piece.label + " ";
      }
    }

    result = result + "\n";

  }

  return result;
}

Board.prototype.asString = function()
{
  var result = "";

  var i;

  for (i = 0; i < this.pieces.length; i ++ ) {
    var boardPiece = this.pieces[ i ];
    if ( boardPiece.isFixed == false ) {
      result = result + boardPiece.piece.label + ":" + boardPiece.coord.x + "," + boardPiece.coord.y + ".";
    }
  }

  return result;
}


Board.prototype.insideGrid = function( x, y )
{
  return (x >= 0) && (x < this.width) && (y >= 0) && (y < this.height);
}

Board.prototype.canMove = function( boardPiece, newCoord )
{
  var i;

  if ( boardPiece.isFixed ) {
    return false;
  }

  for ( i = 0; i < boardPiece.piece.elements.length; i ++ ) {
    var coord = boardPiece.piece.elements[ i ];
    var x = coord.x + newCoord.x;
    var y = coord.y + newCoord.y;

    if ( ! this.insideGrid( x, y ) ) {
      return false;
    }

    var other = this.getPieceAt( x, y );
    if ( (other != Board.EMPTY) && (other != boardPiece) ) {
      return false;
    }
  }
  return true;
}

Board.prototype.move = function( boardPiece, newCoord )
{
  boardPiece.place( newCoord );

  if ( this.visible ) {
    var img = ww_findObj( boardPiece.id, this.doc );
    var screenCoord = this.gameToScreen( newCoord );

    img.style.left = screenCoord.x + "px";
    img.style.top = screenCoord.y + "px";
  }
}


/* -------------- Piece ------------- */

function Piece( label, image )
{
  this.elements = new Array();
  this.label = label;
  this.image = image;
}

Piece.prototype.addElement = function( x, y )
{
  this.elements[ this.elements.length ] = new Coord( x, y );
}

Piece.prototype.toString = function()
{
  if ( this.elements.length == 0 ) {
    return "empty piece";
  }

  var result = "";
  var i;

  for ( i = 0; i < this.elements.length; i ++ ) {
    result = result + this.elements[ i ] + "\n";
  }

  return result;
}

/* -------------- Coord ------------- */

function Coord( x, y )
{
  this.x = x;
  this.y = y;
}

Coord.prototype.toString = function()
{
  return "(" + this.x + "," + this.y + ")";
}


/* -------------- BoardPiece ------------- */

/*
  BoardPiece states where a piece is on a grid.
  You can think of it as the middle of a many-to-many
  relationship in a database.
  A piece can appear multiple times on a grid.
*/

function BoardPiece( board, piece, x, y, id )
{
  this.board = board;
  this.piece = piece;
  this.coord = null;
  this.isFixed = false;

  this.place( new Coord( x, y ) );

  if ( id == null ) {
    id = getUniqueId();
  }
  this.id = id;
}

BoardPiece.prototype.place = function( coord )
{
  if (this.coord != null) {
    this.remove();
  }

  this.coord = coord;

  var i;
  for ( i = 0; i < this.piece.elements.length; i ++ ) {

    var eleCoord = this.piece.elements[ i ];

    this.board.setPieceAt( this, eleCoord.x + this.coord.x, eleCoord.y + this.coord.y );
  }
}

BoardPiece.prototype.remove = function()
{

  var i;
  for ( i = 0; i < this.piece.elements.length; i ++ ) {
    var eleCoord = this.piece.elements[ i ];
    this.board.setEmptyAt( eleCoord.x + this.coord.x, eleCoord.y + this.coord.y );
  }

  this.coord = null;
}

BoardPiece.prototype.toString = function()
{
  var result = "BoardPiece : " + this.id + " @ " + this.coord + " piece : " + this.piece;

  return result;
}


/* -------------- Move ------------- */

function Move( boardPiece, fromCoord, toCoord )
{
  this.boardPiece = boardPiece;
  this.fromCoord = fromCoord;
  this.toCoord = toCoord;
}


/* -------------- Controller ------------- */

function Controller( board )
{
}

Controller.prototype.initController = function( board )
{
  this.board = board;
  this.history = new MoveHistory( board );
}

Controller.prototype.moveBoardPieceId = function( id, newCoord )
{
  var boardPiece = this.board.pieceMap[ id ];
  // alert( "Moving piece id : " + id + " ie " + boardPiece );

  if ( boardPiece == null ) {
    alert( "ERROR: piece : '" + id + "' not found." );
  } else {
    this.moveBoardPiece( boardPiece, newCoord );
  }
}

Controller.prototype.moveBoardPiece = function( boardPiece, newCoord )
{
  this.history.addMove( boardPiece.id, newCoord );
  this.board.move( boardPiece, newCoord );
}

Controller.prototype.undo = function(  )
{
  this.history.undo();

  return false;
}


Controller.prototype.redo = function(  )
{
  this.history.redo();
  return false;
}


Controller.prototype.showMoves = function(  )
{
  var html = "<pre>\n";
  html += this.history.listMoves();
  html += "</pre>";
  
  html += this.board.generatePieceKey();
  
  ww_findObj( "moves" ).innerHTML = html;
  return false;
}



Controller.prototype.cloneBoard = function(  )
{
  // This is a bodge. On my browser, window.opener gives the wrong result if a pop-up window
  // pops up ANOTHER pop-up window.
  // So instead of doing opener.board.clone(), we do opener.boardToClone.clone()
  window.boardToClone = this.board;
  if (opener) {
    opener.boardToClone = this.board;
  }

  slidingBlocksPopup( "clone.jsp" );
}

/* -------------- MoveHistory ------------- */


function MoveHistory( board )
{
  this.board = board;

  this.moves = new Array();
  this.moveIndex = 0;
  this.moveCount = 0;

}

MoveHistory.prototype.clear = function()
{
  this.moveIndex = 0;
  this.moveCount = 0;
}

MoveHistory.prototype.addMove = function( id, newCoord )
{

  var boardPiece = this.board.pieceMap[ id ];

  if ( boardPiece == null ) {
    alert( "ERROR: boardPiece : '" + id + "' not found." );
  }

  if ( ( this.moveIndex > 0 ) && ( this.moves[ this.moveIndex -1 ].boardPiece == boardPiece ) ) {
    // moved the same piece

    var move = this.moves[ this.moveIndex - 1 ];
    if ( (move.fromCoord.x == newCoord.x) && (move.fromCoord.y == newCoord.y) ) {
      // back to its starting place
      this.moveIndex --;
      this.moveCount = this.moveIndex;
    } else {
      move.toCoord = newCoord;
    }

  } else {
    // moved a different piece;

    this.moves[ this.moveIndex ] = new Move( boardPiece, boardPiece.coord, newCoord );
    this.moveIndex ++;
    this.moveCount = this.moveIndex;

  }

}

MoveHistory.prototype.undo = function()
{
  if ( this.moveIndex > 0 ) {
    var move = this.moves[ this.moveIndex -1 ];
    var boardPiece = move.boardPiece;

    this.moveIndex --;

    this.board.move( boardPiece, move.fromCoord );
  } else {
    alert( "Nothing to undo" );
  }
}

MoveHistory.prototype.undoAll = function()
{
  while ( this.moveIndex > 0 ) {
    this.undo();
  }
}


MoveHistory.prototype.redo = function()
{
  if ( this.moveIndex < this.moveCount ) {

    var move = this.moves[ this.moveIndex ];
    var boardPiece = move.boardPiece;

    this.moveIndex ++;
    //alert( "Redo piece : " + boardPiece.id + " to " + move.toCoord );
    this.board.move( boardPiece, move.toCoord );
  } else {
    alert( "Nothing to redo" );
  }
}

MoveHistory.prototype.listMoves = function(  )
{
  var result = "";
  var i;

  result = "solution = new Solution( board );\n\n";

  for ( i = 0; i < this.moveIndex; i ++ ) {
    var move = this.moves[ i ];

    result = result + "solution.addMove(\"" + move.boardPiece.id + "\", " +
      move.toCoord.x + "," + move.toCoord.y + ");\n";
  }

  return result;
}


/* -------------- PlayController ------------- */

// Inherits from Controller

function PlayController( board )
{
}
PlayController.prototype = new Controller();

PlayController.prototype.initPlayController = function( board )
{
  this.initController( board );
  this.dragging = null;
}

// There are inconsistancies in handling inhreitance with different versions of javascript
// So this function gets around the inconsistancies. Do not call the contructor directly.
function CreatePlayController( board )
{
  var controller = new PlayController();
  controller.initPlayController( board );

  return controller;
}

function fixMouseEvent(e)
{
	if (!e) var e = window.event;

	if (e.pageX || e.pageY)	{

		e.documentX = e.pageX;
		e.documentY = e.pageY;

  }	else if (e.clientX || e.clientY) {

		e.documentX = e.clientX + document.body.scrollLeft;
		e.documentY = e.clientY + document.body.scrollTop;
	}

  if ( e.layerX ) {
    e.containerX = e.layerX;
    e.containerY = e.layerY;
  } else if ( e.offsetX ) {
    e.containerX = e.offsetX;
    e.containerY = w.offsetY;
  }

	// documentX and documentY contain the mouse position relative to the document
	// containerX and containerY contain the mouse position relative to the containing element.

  return e;
}

PlayController.prototype.mouseDown = function( event )
{
  fixMouseEvent( event );
  
  var containerCoord = new Coord( event.containerX, event.containerY );
  var gameCoord = this.board.containerToGame( containerCoord );
  var boardPiece = this.board.getPieceAt( gameCoord.x, gameCoord.y );

  if ( ( boardPiece != null ) && ( boardPiece.isFixed == false ) ) {

    this.dragging = new Object();
    this.dragging.boardPiece = boardPiece;
    this.dragging.startCoord = containerCoord;

  }

  return false;
}


PlayController.prototype.mouseUp = function( event )
{
  this.dragging = null;
  return false;
}

PlayController.prototype.mouseMove = function( event )
{
  fixMouseEvent( event );

  if ( (this.dragging != null)  ) {

    var containerCoord = new Coord( event.containerX, event.containerY );

    var diffx = containerCoord.x - this.dragging.startCoord.x;
    var diffy = containerCoord.y - this.dragging.startCoord.y;

    var dx = 0;
    var dy = 0;

    if ( Math.abs( diffy ) > Math.abs( diffx ) ) {

      // Move vertical

      if ( diffy < - this.board.scaleY / 2 ) {
        dy = -1;
      } else if ( diffy > this.board.scaleY / 2 ) {
        dy = 1;
      } else {
        return false;
      }

    } else {
      // Move horizontal

      if ( diffx < - this.board.scaleX / 2 ) {
        dx = -1;
      } else if ( diffx > this.board.scaleX / 2 ) {
        dx = 1;
      } else {
        return false;
      }
    }

    var boardPiece = this.dragging.boardPiece;


    var newCoord = new Coord( boardPiece.coord.x + dx, boardPiece.coord.y + dy );

    if ( this.board.canMove( boardPiece, newCoord ) ) {
      this.moveBoardPiece( boardPiece, newCoord );

      this.dragging.startCoord.x += dx * this.board.scaleX;
      this.dragging.startCoord.y += dy * this.board.scaleY;
    }


  }

  return false;
}


PlayController.prototype.cheat = function( solution )
{
  if ( solution == null ) {
    alert( "There is no solution known. Perhaps you could supply me with one :-)" );
  } else {

    this.history.undoAll();
    this.history.clear();

    var i;

    for ( i = 0; i < solution.history.moves.length; i ++ ) {
      var move = solution.history.moves[ i ];
      var boardPiece = this.board.pieceMap[ move.boardPiece.id ];
      // alert( "Adding move : " + boardPiece + " : "+  move.fromCoord + "," + move.toCoord );
      this.history.addMove( boardPiece.id, move.toCoord );
      this.board.move( boardPiece, move.toCoord );
    }

    this.history.undoAll();

    alert( "You can now move through all of the moves using the Redo button. CHEATER!" );
  }

  return false;
}


/* -------------- Solution ------------- */


function Solution( board )
{
  if (board == null) {
    board = window.board;
  }
  this.board = board.clone();
  this.board.visible = false;
  this.history = new MoveHistory( this.board );
}


Solution.prototype.addMove = function( id, toX, toY )
{
  var newCoord = new Coord( toX, toY );
  var boardPiece = this.board.pieceMap[ id ];
  if ( boardPiece == null ) {
    alert( "ERROR: piece : '" + id + "' not found." );
  }

  this.history.addMove( id, newCoord );
  this.board.move( boardPiece, newCoord );
}



/* -------------- End ------------- */


