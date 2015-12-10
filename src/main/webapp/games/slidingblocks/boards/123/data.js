board = new Board( 10, 6, 30, 30, 31, 38 );
board.background = "background.png";

var piece1 = new Piece( "1", "piece1.png" );
piece1.addElement( 1, 0 );
piece1.addElement( 2, 0 );
piece1.addElement( 0, 1 );
piece1.addElement( 1, 1 );
piece1.addElement( 2, 1 );
piece1.addElement( 0, 2 );
piece1.addElement( 1, 2 );
piece1.addElement( 2, 2 );


var piece2 = new Piece( "2", "piece2.png" );
piece2.addElement( 1, 0 );
piece2.addElement( 2, 0 );
piece2.addElement( 0, 1 );
piece2.addElement( 1, 1 );
piece2.addElement( 2, 1 );
piece2.addElement( 0, 2 );
piece2.addElement( 1, 2 );
piece2.addElement( 2, 2 );

var piece3 = new Piece( "3", "piece3.png" );
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
piece4.addElement( 0, 1 );
piece4.addElement( 1, 1 );


board.addPiece( piece3, 0, 0 );
board.addPiece( piece2, 3, 0 );
board.addPiece( piece1, 6, 0 );
board.addPiece( piece4, 0, 4 );
board.addPiece( piece4, 8, 4 );


board.setFixed( 0,0 );
board.setFixed( 3,0 );
board.setFixed( 6,0 );
board.setFixed( 9,0 );


solution = new Solution( board );

solution.addMove("id4",6,4);
solution.addMove("id2",0,3);
solution.addMove("id3",3,0);
solution.addMove("id4",6,1);
solution.addMove("id5",8,1);
solution.addMove("id2",7,3);
solution.addMove("id3",0,3);
solution.addMove("id4",3,1);
solution.addMove("id5",5,4);
solution.addMove("id2",6,0);
solution.addMove("id5",8,4);
solution.addMove("id3",3,3);
solution.addMove("id1",0,3);
solution.addMove("id4",0,1);
solution.addMove("id3",3,0);
solution.addMove("id1",5,3);
solution.addMove("id4",0,4);
solution.addMove("id3",0,0);
solution.addMove("id4",4,0);
solution.addMove("id1",0,3);
solution.addMove("id4",6,4);
solution.addMove("id2",3,0);
solution.addMove("id4",6,1);
solution.addMove("id5",8,1);
solution.addMove("id1",7,3);
solution.addMove("id2",1,3);
solution.addMove("id4",3,1);
solution.addMove("id5",4,4);
solution.addMove("id1",6,0);
solution.addMove("id5",8,4);
solution.addMove("id4",6,4);
solution.addMove("id2",3,0);
solution.addMove("id4",0,4);

