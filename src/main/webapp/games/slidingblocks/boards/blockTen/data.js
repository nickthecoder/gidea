board = new Board( 4, 6, 60, 60, 20, 24 );
board.background = "background.png";

var piece1 = new Piece( "1", "piece1.png" );
piece1.addElement( 0, 0 );
piece1.addElement( 0, 1 );
piece1.addElement( 1, 0 );
piece1.addElement( 1, 1 );


var piece2 = new Piece( "2", "piece2.png" );
piece2.addElement( 0, 0 );
piece2.addElement( 0, 1 );
piece2.addElement( 1, 1 );

var piece3 = new Piece( "3", "piece3.png" );
piece3.addElement( 0, 0 );

var piece4 = new Piece( "4", "piece4.png" );
piece4.addElement( 0, 0 );
piece4.addElement( 0, 1 );


var piece5 = new Piece( "5", "piece5.png" );
piece5.addElement( 1, 0 );
piece5.addElement( 0, 1 );
piece5.addElement( 1, 1 );


board.setFixed( 0,0 );
board.setFixed( 3,0 );
// board.addPiece( piece1, 1, 0 );
board.addPiece( piece2, 0, 1 );
board.addPiece( piece4, 3, 1 );
board.addPiece( piece3, 2, 2 );
board.addPiece( piece3, 0, 3 );
board.addPiece( piece1, 1, 3 );
board.addPiece( piece3, 3, 3 );
board.addPiece( piece4, 0, 4 );
board.addPiece( piece3, 1, 5 );
board.addPiece( piece5, 2, 4 );

solution = new Solution( board );

solution.addMove("id5",2,0);
solution.addMove("id3",1,0);
solution.addMove("id6",0,1);
solution.addMove("id7",0,2);
solution.addMove("id8",1,4);
solution.addMove("id11",2,3);
solution.addMove("id10",3,5);
solution.addMove("id8",1,5);
solution.addMove("id7",1,2);
solution.addMove("id9",0,2);
solution.addMove("id8",0,4);
solution.addMove("id10",0,5);
solution.addMove("id11",2,4);
solution.addMove("id10",1,5);
solution.addMove("id7",1,3);
solution.addMove("id4",3,2);
solution.addMove("id8",0,5);
solution.addMove("id9",0,3);
solution.addMove("id4",3,1);
solution.addMove("id6",2,2);
solution.addMove("id9",0,1);
solution.addMove("id7",0,3);
solution.addMove("id6",3,3);
solution.addMove("id7",1,2);
solution.addMove("id10",0,3);
solution.addMove("id8",1,5);
solution.addMove("id10",0,5);
solution.addMove("id7",0,3);
solution.addMove("id6",1,2);
solution.addMove("id4",2,3);
solution.addMove("id6",3,3);
solution.addMove("id3",1,1);
solution.addMove("id5",1,0);
solution.addMove("id6",2,0);
solution.addMove("id3",2,1);
solution.addMove("id5",1,2);
solution.addMove("id6",1,0);
solution.addMove("id3",2,0);
solution.addMove("id4",3,2);
solution.addMove("id7",1,3);
solution.addMove("id5",2,2);
solution.addMove("id9",1,1);
solution.addMove("id10",0,1);
solution.addMove("id8",0,2);
solution.addMove("id7",0,4);
solution.addMove("id5",2,4);
solution.addMove("id9",2,2);
solution.addMove("id8",0,3);
solution.addMove("id10",1,3);
solution.addMove("id8",0,1);
solution.addMove("id10",1,1);
solution.addMove("id9",0,2);
solution.addMove("id4",1,2);
solution.addMove("id3",2,2);
solution.addMove("id10",3,2);
solution.addMove("id6",3,1);
solution.addMove("id4",2,0);
solution.addMove("id9",1,0);
solution.addMove("id7",0,2);
solution.addMove("id5",0,4);
solution.addMove("id11",0,4);
solution.addMove("id3",2,4);
solution.addMove("id10",3,4);
solution.addMove("id4",2,2);
solution.addMove("id6",2,0);
solution.addMove("id10",2,1);
solution.addMove("id4",3,3);
solution.addMove("id10",3,2);
solution.addMove("id6",3,1);
solution.addMove("id7",1,2);
solution.addMove("id9",2,0);
solution.addMove("id7",0,2);
solution.addMove("id9",2,2);
solution.addMove("id6",1,0);
solution.addMove("id10",1,1);
solution.addMove("id9",3,1);
solution.addMove("id7",1,2);
solution.addMove("id8",0,3);
solution.addMove("id10",0,2);
solution.addMove("id6",0,1);
solution.addMove("id7",1,0);

