board = new Board( 9,9, 30,30,  5,15 );
board.background = "background.png";

var piece1 = new Piece( "1", "piece1.png" );
piece1.addElement( 0, 0 );
piece1.addElement( 1, 0 );
piece1.addElement( 2, 0 );
piece1.addElement( 0, 1 );
piece1.addElement( 1, 1 );
piece1.addElement( 0, 2 );
piece1.addElement( 1, 2 );
piece1.addElement( 2, 2 );



var piece2 = new Piece( "2", "piece2.png" );
piece2.addElement( 0, 0 );
piece2.addElement( 1, 0 );
piece2.addElement( 2, 0 );
piece2.addElement( 1, 1 );
piece2.addElement( 2, 1 );
piece2.addElement( 0, 2 );
piece2.addElement( 1, 2 );
piece2.addElement( 2, 2 );


var piece3 = new Piece( "3", "piece3.png" );
piece3.addElement( 0, 0 );
piece3.addElement( 1, 0 );
piece3.addElement( 2, 0 );
piece3.addElement( 0, 1 );
piece3.addElement( 1, 1 );
piece3.addElement( 2, 1 );
piece3.addElement( 0, 2 );
piece3.addElement( 1, 2 );
piece3.addElement( 2, 2 );

var piece4 = new Piece( "4", "piece4.png" );
piece4.addElement( 0, 0 );
piece4.addElement( 1, 0 );
piece4.addElement( 2, 0 );
piece4.addElement( 0, 1 );
piece4.addElement( 1, 1 );
piece4.addElement( 0, 2 );
piece4.addElement( 1, 2 );
piece4.addElement( 2, 2 );



board.setFixed( 0,0 );
board.setFixed( 1,0 );
board.setFixed( 2,0 );

board.setFixed( 0,1 );
board.setFixed( 1,1 );
board.setFixed( 2,1 );

board.setFixed( 0,2 );
board.setFixed( 1,2 );
board.setFixed( 2,2 );


board.setFixed( 0,4 );
board.setFixed( 8,4 );

board.setFixed( 0,6 );
board.setFixed( 0,7 );
board.setFixed( 0,8 );

board.setFixed( 4,6 );
board.setFixed( 4,7 );
board.setFixed( 4,8 );

board.setFixed( 8,6 );
board.setFixed( 8,7 );
board.setFixed( 8,8 );



board.addPiece( piece1, 3, 0 );
board.addPiece( piece2, 6, 0 );
board.addPiece( piece3, 3, 3 );
board.addPiece( piece4, 6, 3 );


solution = new Solution();

solution.addMove("id23",1,6)
solution.addMove("id24",5,6)
solution.addMove("id21",6,3)
solution.addMove("id22",0,3)
solution.addMove("id21",6,0)
solution.addMove("id24",3,0)
solution.addMove("id22",5,6)
solution.addMove("id24",6,3)
solution.addMove("id23",3,0)
solution.addMove("id24",1,6)
solution.addMove("id23",1,3)
solution.addMove("id21",6,3)
solution.addMove("id23",6,0)
solution.addMove("id21",3,0)
solution.addMove("id22",0,3)
solution.addMove("id21",5,6)
solution.addMove("id22",3,0)
solution.addMove("id24",6,3)
solution.addMove("id22",1,6)
solution.addMove("id24",3,0)
solution.addMove("id21",6,3)
solution.addMove("id22",3,3)

