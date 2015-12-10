board = new Board( 4, 10, 90, 30, 45, 45 );
board.background = "background.png";

var piece1 = new Piece( "1", "piece1.png" );
piece1.addElement( 0, 0 );
piece1.addElement( 0, 1 );
piece1.addElement( 0, 2 );

var piece2 = new Piece( "2", "piece2.png" );
piece2.addElement( 0, 0 );
piece2.addElement( 0, 1 );


var piece3 = new Piece( "3", "piece3.png" );
piece3.addElement( 0, 0 );
piece3.addElement( 0, 1 );
piece3.addElement( 0, 2 );



var piece4 = new Piece( "4", "piece4.png" );
piece4.addElement( 0, 0 );
piece4.addElement( 0, 1 );
piece4.addElement( 0, 2 );
piece4.addElement( 0, 3 );


var piece5 = new Piece( "5", "piece5.png" );
piece5.addElement( 0, 0 );
piece5.addElement( 0, 1 );


var piece6 = new Piece( "6", "piece6.png" );
piece6.addElement( 0, 0 );
piece6.addElement( 0, 1 );
piece6.addElement( 0, 2 );


var piece7 = new Piece( "7", "piece7.png" );
piece7.addElement( 0, 0 );
piece7.addElement( 0, 1 );
piece7.addElement( 0, 2 );
piece7.addElement( 0, 3 );



var piece8 = new Piece( "8", "piece8.png" );
piece8.addElement( 0, 0 );
piece8.addElement( 0, 1 );
piece8.addElement( 0, 2 );
piece8.addElement( 1, 0 );
piece8.addElement( 1, 1 );
piece8.addElement( 1, 2 );
piece8.addElement( 2, 0 );
piece8.addElement( 2, 1 );
piece8.addElement( 2, 2 );



var piece9 = new Piece( "9", "piece9.png" );
piece9.addElement( 0, 0 );
piece9.addElement( 0, 1 );
piece9.addElement( 0, 2 );



board.setFixed( 3,0 );
board.setFixed( 3,1 );

board.addPiece( piece1, 0, 0 );
board.addPiece( piece2, 1, 0 );
board.addPiece( piece3, 2, 0 );
board.addPiece( piece4, 0, 3 );
board.addPiece( piece5, 1, 2 );
board.addPiece( piece9, 1, 4 );
board.addPiece( piece7, 2, 3 );
board.addPiece( piece8, 0, 7 );
board.addPiece( piece6, 3, 7 );

solution = new Solution( board );

solution.addMove("id9",3,3);
solution.addMove("id5",2,4);
solution.addMove("id7",2,2);
solution.addMove("id4",2,0);
solution.addMove("id8",1,0);
solution.addMove("id5",1,4);
solution.addMove("id7",2,5);
solution.addMove("id4",2,3);
solution.addMove("id8",2,0);
solution.addMove("id5",1,0);
solution.addMove("id4",1,3);
solution.addMove("id7",1,5);
solution.addMove("id9",2,3);
solution.addMove("id11",3,2);
solution.addMove("id10",1,7);
solution.addMove("id6",0,6);
solution.addMove("id3",0,3);
solution.addMove("id5",0,0);
solution.addMove("id8",1,0);
solution.addMove("id9",2,0);
solution.addMove("id7",3,5);
solution.addMove("id4",2,5);
solution.addMove("id8",1,4);
solution.addMove("id9",1,0);
solution.addMove("id11",2,0);
solution.addMove("id7",3,2);
solution.addMove("id4",3,5);
solution.addMove("id8",2,4);
solution.addMove("id9",1,3);
solution.addMove("id5",1,0);
solution.addMove("id3",0,0);
solution.addMove("id6",0,3);
solution.addMove("id10",0,7);
solution.addMove("id4",3,8);
solution.addMove("id7",3,6);
solution.addMove("id8",3,2);
solution.addMove("id7",2,3);
solution.addMove("id4",2,5);
solution.addMove("id8",3,7);
solution.addMove("id7",3,5);
solution.addMove("id11",3,2);
solution.addMove("id4",2,0);
solution.addMove("id7",2,2);
solution.addMove("id11",2,4);
solution.addMove("id8",3,2);
solution.addMove("id10",1,7);
solution.addMove("id6",0,6);
solution.addMove("id3",0,3);
solution.addMove("id5",0,0);
solution.addMove("id9",1,0);
solution.addMove("id11",1,4);
solution.addMove("id7",3,5);
solution.addMove("id4",2,5);
solution.addMove("id9",2,0);
solution.addMove("id11",1,0);
solution.addMove("id4",1,3);
solution.addMove("id7",1,5);
solution.addMove("id9",2,3);
solution.addMove("id11",2,0);
solution.addMove("id5",1,0);
solution.addMove("id3",0,0);
solution.addMove("id6",0,3);
solution.addMove("id10",0,7);
solution.addMove("id8",3,7);
solution.addMove("id9",3,3);
solution.addMove("id11",2,4);
solution.addMove("id5",2,0);
solution.addMove("id4",1,0);
solution.addMove("id7",1,2);
solution.addMove("id11",1,4);
solution.addMove("id9",2,3);
