
Board.prototype.solve = function( doc )
{
  var solver = new Solver( board, doc );
  solver.solve();
}


/* -------------- Solver ------------- */

function solveBoard()
{

  var win = window.open( "solve.html" );

  return false;
}

function Solver( initialBoard, doc )
{
  this.board = board;

  if ( doc == null ) {
    doc = document;
  }
  this.doc = doc;

  this.nodes = new Array();

}

Solver.prototype.solve = function()
{
  var node = this.addNode( this.board.asString(), null, null );
  this.solveRecurse( node );
}

Solver.prototype.solveRecurse = function( previousNode )
{
  var i, dx, dy;


  // Loop over all possible moves

  for ( i = 0; i < this.board.pieces.length; i ++ ) {
  for ( dx = -1; dx <= 1; dx ++ ) {
  for ( dy = -1; dy <= 1; dy ++ ) {

    var boardPiece = this.board.pieces[ i ];

    if ( this.canMove( boardPiece, dx, dy ) ) {
// alert( "can move by " + dx + "," + dy );
      var move = new Move( boardPiece, dx, dy );
      var oldCoord = new Coord( boardPiece.coord.x, boardPiece.coord.y );
      var newCoord = new Coord( boardPiece.coord.x + dx, boardPiece.coord.y +  dy );
// alert( "moving to :" + (boardPiece.coord.x + dx) + "," + (boardPiece.coord.y +  dy) );
      this.board.move( boardPiece, newCoord ); // MOVE
// alert( "moved" );
      var boardString = board.asString();
      var duplicateNode = this.findNode( boardString );
// alert( "bs = " +  boardString );

      if ( duplicateNode == null ) {

        var node = this.addNode( boardString, previousNode, move );
        this.solveRecurse( node );

      } else {
        duplicateNode.useShortestRoute( previousNode, move );
      }

      this.board.move( boardPiece, oldCoord ); // UN-MOVE

    }

  }
  }
  }
// alert( "done this level" );
}

Solver.prototype.findNode = function( boardString )
{
  var i;

  for ( i = 0; i < this.nodes.length; i ++ ) {
    var node = this.nodes[ i ];
    if ( node.boardString == boardString ) {
      return node;
    }
  }

  // Node not found.
  return null;
}


Solver.prototype.canMove = function( boardPiece, dx, dy )
{
  if (! ( (dx == 0) ^ (dy ==0) )) {
    return false;
  }

  var coord = new Coord( boardPiece.coord.x + dx, boardPiece.coord.y + dy );
  return this.board.canMove( boardPiece, coord );
}


Solver.prototype.addNode = function( boardString, previousNode, move )
{
  var node = new Node( boardString, previousNode, move );
  this.nodes[ this.nodes.length ] = node;

  this.doc.writeln( "<li>" );
  this.doc.writeln( node.moveNumber );
  this.doc.writeln( ") " );

  this.doc.writeln( boardString );
  this.doc.writeln( "</li>" );
  return node;
}



/* -------------- Node ------------- */

function Node( boardString, previousNode, move )
{
  this.boardString = boardString;
  this.previousNode = previousNode;
  this.move = move;

  if ( previousNode == null ) {
    this.moveNumber = 0;
  } else {
    this.moveNumber = previousNode.moveNumber + 1;
  }
}


Node.prototype.useShortestRoute = function( alternatePrevNode, move )
{
  if ( alternatePrevNode.moveNumber + 1 < this.moveNumber ) {

    this.moveNumber = alternatePrevNode.moveNumber + 1;
    this.previousNode = alternatePrevNode;
    this.move = move;
  }
}


