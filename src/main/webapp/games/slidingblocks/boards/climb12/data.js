board = new Board( 5,6,  60,60,   26,33 );
board.background = "background.png";

var piece1 = new Piece( "1", "piece1.png" );
piece1.addElement( 1, 0 );
piece1.addElement( 0, 1 );
piece1.addElement( 1, 1 );
piece1.addElement( 2, 1 );


var piece2 = new Piece( "2", "piece2.png" );
piece2.addElement( 0, 0 );
piece2.addElement( 0, 1 );


var piece3 = new Piece( "3", "piece3.png" );
piece3.addElement( 0, 0 );
piece3.addElement( 1, 0 );
piece3.addElement( 0, 1 );

var piece4 = new Piece( "4", "piece4.png" );
piece4.addElement( 1, 0 );
piece4.addElement( 0, 1 );
piece4.addElement( 1, 1 );


var piece5 = new Piece( "5", "piece5.png" );
piece5.addElement( 0, 0 );
piece5.addElement( 1, 0 );


var piece6 = new Piece( "6", "piece6.png" );
piece6.addElement( 0, 0 );



board.setFixed( 0, 0 );
board.setFixed( 1, 0 );
board.setFixed( 3, 0 );
board.setFixed( 4, 0 );

board.addPiece( piece2, 0, 1 );
board.addPiece( piece2, 4, 1 );
board.addPiece( piece3, 1, 2 );
board.addPiece( piece4, 2, 2 );
board.addPiece( piece6, 0, 3 );
board.addPiece( piece6, 4, 3 );
board.addPiece( piece5, 0, 4 );
board.addPiece( piece1, 1, 4 );
board.addPiece( piece5, 3, 4 );
board.addPiece( piece6, 0, 5 );
board.addPiece( piece6, 4, 5 );


solution = new Solution( board );

solution.addMove("id7", 1,1);
solution.addMove("id9", 1,3);
solution.addMove("id7", 2,1);
solution.addMove("id9", 1,1);
solution.addMove("id5", 0,2);
solution.addMove("id9", 0,1);
solution.addMove("id7", 1,1);
solution.addMove("id8", 1,2);
solution.addMove("id10", 3,1);
solution.addMove("id6", 4,2);
solution.addMove("id10", 4,1);
solution.addMove("id8", 2,2);
solution.addMove("id7", 1,2);
solution.addMove("id10", 2,0);
solution.addMove("id6", 4,1);
solution.addMove("id7", 1,1);
solution.addMove("id8", 2,1);
solution.addMove("id13", 3,3);
solution.addMove("id15", 4,4);
solution.addMove("id12", 2,4);
solution.addMove("id11", 1,3);
solution.addMove("id14", 2,4);
solution.addMove("id5", 1,4);
solution.addMove("id9", 0,5);
solution.addMove("id7", 0,1);
solution.addMove("id8", 1,1);
solution.addMove("id11", 0,3);
solution.addMove("id13", 2,3);
solution.addMove("id6", 3,1);
solution.addMove("id15", 4,1);
solution.addMove("id13", 3,3);
solution.addMove("id11", 1,3);
solution.addMove("id9", 0,3);
solution.addMove("id5", 0,4);
solution.addMove("id14", 1,4);
solution.addMove("id12", 1,4);
solution.addMove("id13", 3,4);
solution.addMove("id6", 4,2);
solution.addMove("id8", 2,1);
solution.addMove("id7", 1,1);
solution.addMove("id9", 0,1);
solution.addMove("id5", 0,2);
solution.addMove("id14", 0,4);
solution.addMove("id12", 0,4);
solution.addMove("id13", 3,5);
solution.addMove("id6", 3,3);
solution.addMove("id15", 4,4);
solution.addMove("id8", 3,1);
solution.addMove("id7", 2,1);
solution.addMove("id9", 1,1);
solution.addMove("id5", 0,1);
solution.addMove("id11", 0,3);
solution.addMove("id6", 2,3);
solution.addMove("id8", 3,2);
solution.addMove("id7", 3,1);
solution.addMove("id10", 1,2);
solution.addMove("id6", 2,0);
solution.addMove("id15", 2,2);
solution.addMove("id8", 3,3);
solution.addMove("id15", 3,3);
solution.addMove("id10", 2,4);
solution.addMove("id11", 1,2);
solution.addMove("id14", 0,3);
solution.addMove("id10", 2,3);
solution.addMove("id12", 0,3);
solution.addMove("id13", 0,5);
solution.addMove("id8", 3,4);
solution.addMove("id13", 1,5);
solution.addMove("id8", 3,3);
solution.addMove("id13", 3,5);
solution.addMove("id12", 0,4);
solution.addMove("id14", 0,4);
solution.addMove("id10", 2,4);
solution.addMove("id5", 0,2);
solution.addMove("id9", 0,1);
solution.addMove("id11", 1,3);
solution.addMove("id6", 1,1);
solution.addMove("id7", 2,1);
solution.addMove("id15", 4,2);
solution.addMove("id7", 3,1);
solution.addMove("id11", 2,3);
solution.addMove("id6", 1,2);
solution.addMove("id9", 2,0);
solution.addMove("id5", 0,1);
solution.addMove("id6", 1,1);
solution.addMove("id11", 0,3);
solution.addMove("id7", 2,1);
solution.addMove("id10", 3,3);
solution.addMove("id15", 4,1);
solution.addMove("id10", 4,2);
solution.addMove("id11", 2,3);
solution.addMove("id14", 1,3);
solution.addMove("id5", 0,3);
solution.addMove("id6", 0,1);
solution.addMove("id7", 1,1);
solution.addMove("id11", 2,2);
solution.addMove("id15", 3,1);
solution.addMove("id10", 4,1);
solution.addMove("id11", 2,3);
solution.addMove("id10", 4,2);
solution.addMove("id15", 4,1);
solution.addMove("id7", 2,1);
solution.addMove("id14", 1,2);
solution.addMove("id11", 1,3);
solution.addMove("id10", 3,3);
solution.addMove("id15", 4,2);
solution.addMove("id7", 3,1);
solution.addMove("id14", 1,1);
solution.addMove("id11", 1,2);
solution.addMove("id10", 2,4);
solution.addMove("id11", 2,3);
solution.addMove("id14", 1,3);
solution.addMove("id7", 1,1);
solution.addMove("id15", 4,1);
solution.addMove("id11", 3,2);
solution.addMove("id7", 2,1);
solution.addMove("id14", 3,3);
solution.addMove("id6", 1,1);
solution.addMove("id5", 0,1);
solution.addMove("id10", 0,3);
solution.addMove("id12", 0,3);
solution.addMove("id13", 0,5);
solution.addMove("id8", 2,4);
solution.addMove("id14", 4,5);
solution.addMove("id11", 2,3);
solution.addMove("id15", 4,4);
solution.addMove("id11", 3,3);
solution.addMove("id7", 3,1);
solution.addMove("id9", 2,3);
solution.addMove("id6", 2,0);
solution.addMove("id9", 1,1);
solution.addMove("id6", 2,2);
solution.addMove("id9", 2,0);
solution.addMove("id6", 1,1);
solution.addMove("id7", 2,1);
solution.addMove("id11", 3,2);
solution.addMove("id15", 3,3);
solution.addMove("id14", 4,3);
solution.addMove("id8", 3,4);
solution.addMove("id12", 1,3);
solution.addMove("id13", 1,5);
solution.addMove("id10", 1,3);
solution.addMove("id5", 0,4);
solution.addMove("id6", 0,1);
solution.addMove("id10", 0,3);
solution.addMove("id7", 1,1);
solution.addMove("id11", 3,1);
solution.addMove("id15", 3,2);
solution.addMove("id14", 4,2);
solution.addMove("id12", 1,2);
solution.addMove("id14", 4,3);
solution.addMove("id15", 4,2);
solution.addMove("id12", 1,3);
solution.addMove("id15", 3,3);
solution.addMove("id11", 3,2);
solution.addMove("id7", 1,2);
solution.addMove("id9", 4,1);
solution.addMove("id7", 2,1);
solution.addMove("id10", 1,1);
solution.addMove("id6", 1,2);
solution.addMove("id10", 0,1);
solution.addMove("id6", 1,1);
solution.addMove("id5", 0,2);
solution.addMove("id12", 0,3);
solution.addMove("id13", 0,5);
solution.addMove("id8", 2,4);
solution.addMove("id14", 4,5);
solution.addMove("id15", 4,4);
solution.addMove("id11", 3,3);
solution.addMove("id7", 2,2);
solution.addMove("id9", 2,0);
solution.addMove("id7", 2,1);
solution.addMove("id11", 2,3);
solution.addMove("id15", 4,2);
solution.addMove("id11", 3,3);
solution.addMove("id7", 3,1);
solution.addMove("id11", 2,3);
solution.addMove("id15", 4,4);
solution.addMove("id11", 3,3);
solution.addMove("id9", 2,3);
solution.addMove("id6", 2,0);
solution.addMove("id10", 1,1);
solution.addMove("id5", 0,1);
solution.addMove("id9", 2,2);
solution.addMove("id5", 0,2);
solution.addMove("id10", 0,1);
solution.addMove("id9", 2,3);
solution.addMove("id6", 1,1);
solution.addMove("id9", 2,0);
solution.addMove("id7", 2,1);
solution.addMove("id11", 2,3);
solution.addMove("id15", 4,1);
solution.addMove("id11", 3,2);
solution.addMove("id14", 4,3);
solution.addMove("id8", 3,4);
solution.addMove("id12", 1,3);
solution.addMove("id13", 1,5);
solution.addMove("id5", 0,4);
solution.addMove("id6", 0,2);
solution.addMove("id7", 1,2);
solution.addMove("id15", 1,1);
solution.addMove("id11", 2,1);
solution.addMove("id14", 3,3);
solution.addMove("id11", 3,2);
solution.addMove("id15", 4,1);
solution.addMove("id7", 2,1);
solution.addMove("id6", 1,1);
solution.addMove("id5", 0,2);
solution.addMove("id12", 0,3);
solution.addMove("id13", 0,5);
solution.addMove("id8", 2,4);
solution.addMove("id14", 4,3);
solution.addMove("id8", 3,4);
solution.addMove("id12", 1,3);
solution.addMove("id13", 1,5);
solution.addMove("id5", 0,4);
solution.addMove("id6", 0,2);
solution.addMove("id7", 1,1);
solution.addMove("id11", 2,2);
solution.addMove("id14", 3,3);
solution.addMove("id15", 4,3);
solution.addMove("id11", 3,1);
solution.addMove("id14", 4,2);
solution.addMove("id12", 1,2);
solution.addMove("id13", 1,4);
solution.addMove("id8", 2,4);
solution.addMove("id15", 4,5);
solution.addMove("id14", 3,2);
solution.addMove("id15", 4,2);
solution.addMove("id8", 3,4);
solution.addMove("id13", 2,4);
solution.addMove("id5", 1,4);
solution.addMove("id6", 0,4);
solution.addMove("id10", 0,3);
solution.addMove("id7", 0,1);
solution.addMove("id11", 2,1);
solution.addMove("id15", 4,1);
solution.addMove("id14", 4,3);
solution.addMove("id15", 4,2);
solution.addMove("id11", 3,1);
solution.addMove("id12", 1,1);
solution.addMove("id13", 1,3);
solution.addMove("id14", 2,5);
solution.addMove("id13", 2,4);
solution.addMove("id15", 4,3);
solution.addMove("id12", 1,2);
solution.addMove("id15", 4,2);
solution.addMove("id12", 2,2);
solution.addMove("id10", 2,1);
solution.addMove("id7", 1,2);
solution.addMove("id6", 0,1);
solution.addMove("id5", 0,4);
solution.addMove("id6", 0,2);
solution.addMove("id10", 0,1);
solution.addMove("id7", 1,1);
solution.addMove("id5", 1,4);
solution.addMove("id6", 0,4);
solution.addMove("id10", 1,3);
solution.addMove("id7", 0,1);
solution.addMove("id10", 2,1);
solution.addMove("id7", 1,2);
solution.addMove("id6", 0,1);
solution.addMove("id5", 0,4);
solution.addMove("id6", 0,2);
solution.addMove("id10", 0,1);
solution.addMove("id11", 1,1);
solution.addMove("id5", 1,4);
solution.addMove("id6", 0,4);
solution.addMove("id7", 0,2);
solution.addMove("id11", 3,1);
solution.addMove("id7", 1,1);
solution.addMove("id10", 0,3);
solution.addMove("id7", 0,1);
solution.addMove("id12", 1,2);
solution.addMove("id15", 4,3);
solution.addMove("id12", 1,1);
solution.addMove("id15", 4,2);
solution.addMove("id13", 1,3);
solution.addMove("id14", 4,3);
solution.addMove("id5", 2,4);
solution.addMove("id6", 1,4);
solution.addMove("id10", 0,5);
solution.addMove("id13", 0,3);
solution.addMove("id5", 3,3);
solution.addMove("id6", 2,3);
solution.addMove("id10", 2,5);
solution.addMove("id13", 0,5);
solution.addMove("id6", 0,3);
solution.addMove("id5", 1,3);
solution.addMove("id10", 2,3);
solution.addMove("id14", 3,3);
solution.addMove("id8", 3,3);
solution.addMove("id13", 3,5);
solution.addMove("id6", 0,4);
solution.addMove("id5", 1,4);
solution.addMove("id10", 2,5);
solution.addMove("id14", 2,4);
solution.addMove("id12", 0,2);
solution.addMove("id11", 2,1);
solution.addMove("id15", 4,1);
solution.addMove("id11", 3,2);
solution.addMove("id15", 2,1);
solution.addMove("id11", 3,1);
solution.addMove("id15", 4,2);
solution.addMove("id12", 1,1);
solution.addMove("id6", 0,3);
solution.addMove("id5", 1,3);
solution.addMove("id10", 0,5);
solution.addMove("id13", 1,5);
solution.addMove("id8", 3,4);
solution.addMove("id14", 4,3);
solution.addMove("id5", 3,3);
solution.addMove("id13", 1,4);
solution.addMove("id10", 2,5);
solution.addMove("id6", 0,4);
solution.addMove("id13", 0,3);
solution.addMove("id10", 1,4);
solution.addMove("id5", 2,3);
solution.addMove("id8", 2,4);
solution.addMove("id14", 4,5);
solution.addMove("id15", 3,3);
solution.addMove("id14", 4,3);
solution.addMove("id8", 3,4);
solution.addMove("id5", 2,4);
solution.addMove("id15", 3,4);
solution.addMove("id14", 4,2);
solution.addMove("id13", 3,3);
solution.addMove("id10", 0,3);
solution.addMove("id5", 1,4);
solution.addMove("id10", 2,5);
solution.addMove("id15", 1,3);
solution.addMove("id13", 2,4);
solution.addMove("id15", 4,3);
solution.addMove("id12", 1,2);
solution.addMove("id7", 1,1);
solution.addMove("id6", 0,1);
solution.addMove("id5", 0,3);
solution.addMove("id10", 0,5);
solution.addMove("id13", 1,4);
solution.addMove("id8", 2,4);
solution.addMove("id15", 4,5);
solution.addMove("id14", 3,2);
solution.addMove("id15", 4,3);
solution.addMove("id8", 3,4);
solution.addMove("id13", 2,4);
solution.addMove("id10", 2,5);
solution.addMove("id5", 1,4);
solution.addMove("id6", 0,4);
solution.addMove("id7", 0,1);
solution.addMove("id14", 4,2);
solution.addMove("id7", 0,2);
solution.addMove("id11", 0,1);
solution.addMove("id14", 2,1);
solution.addMove("id15", 4,1);
solution.addMove("id12", 2,1);
solution.addMove("id13", 3,3);
solution.addMove("id10", 1,3);
solution.addMove("id13", 2,4);
solution.addMove("id12", 2,2);
solution.addMove("id15", 4,2);
solution.addMove("id14", 2,2);
solution.addMove("id11", 3,1);
solution.addMove("id7", 1,1);
solution.addMove("id6", 0,1);
solution.addMove("id5", 0,3);
solution.addMove("id10", 0,5);
solution.addMove("id13", 1,5);
solution.addMove("id5", 1,3);
solution.addMove("id6", 0,3);
solution.addMove("id7", 0,1);
solution.addMove("id5", 1,2);
solution.addMove("id13", 2,4);
solution.addMove("id10", 2,5);
solution.addMove("id6", 0,4);
solution.addMove("id5", 1,4);
solution.addMove("id14", 0,3);
solution.addMove("id12", 1,1);
solution.addMove("id14", 4,3);
solution.addMove("id12", 0,2);
solution.addMove("id11", 2,2);
solution.addMove("id15", 2,1);
solution.addMove("id11", 3,1);
solution.addMove("id14", 4,2);
solution.addMove("id12", 2,2);
solution.addMove("id7", 0,2);
solution.addMove("id15", 2,2);
solution.addMove("id11", 0,1);
solution.addMove("id15", 2,1);
solution.addMove("id14", 4,1);
solution.addMove("id12", 2,1);
solution.addMove("id13", 2,3);
solution.addMove("id8", 3,3);
solution.addMove("id10", 4,5);
solution.addMove("id5", 1,3);
solution.addMove("id10", 1,5);
solution.addMove("id8", 3,4);
solution.addMove("id13", 3,3);
solution.addMove("id10", 2,3);
solution.addMove("id5", 2,4);
solution.addMove("id10", 1,5);
solution.addMove("id5", 2,3);
solution.addMove("id10", 2,5);
solution.addMove("id6", 1,3);
solution.addMove("id10", 0,5);
solution.addMove("id6", 1,4);
solution.addMove("id5", 2,4);
solution.addMove("id6", 1,3);
solution.addMove("id5", 2,3);
solution.addMove("id10", 2,5);
solution.addMove("id6", 0,4);
solution.addMove("id5", 1,4);
solution.addMove("id13", 2,4);
solution.addMove("id12", 2,2);
solution.addMove("id15", 2,2);
solution.addMove("id14", 4,2);
solution.addMove("id11", 3,1);
solution.addMove("id7", 0,1);
solution.addMove("id15", 2,1);
solution.addMove("id5", 1,2);
solution.addMove("id6", 0,3);
solution.addMove("id10", 0,5);
solution.addMove("id13", 1,5);
solution.addMove("id5", 1,3);
solution.addMove("id15", 2,2);
solution.addMove("id7", 1,1);
solution.addMove("id6", 0,1);
solution.addMove("id5", 0,3);
solution.addMove("id13", 2,4);
solution.addMove("id10", 1,3);
solution.addMove("id13", 0,5);
solution.addMove("id10", 2,5);
solution.addMove("id5", 1,3);
solution.addMove("id6", 0,3);
solution.addMove("id7", 0,1);
solution.addMove("id15", 1,2);
solution.addMove("id10", 3,4);
solution.addMove("id13", 1,5);
solution.addMove("id6", 0,4);
solution.addMove("id15", 2,2);
solution.addMove("id7", 0,2);
solution.addMove("id11", 0,1);
solution.addMove("id15", 2,1);
solution.addMove("id14", 4,1);
solution.addMove("id12", 2,1);
solution.addMove("id10", 3,3);
solution.addMove("id8", 3,3);
solution.addMove("id13", 3,5);
solution.addMove("id5", 2,4);
solution.addMove("id6", 1,4);
solution.addMove("id7", 0,3);
solution.addMove("id5", 2,3);
solution.addMove("id7", 0,2);
solution.addMove("id6", 0,4);
solution.addMove("id5", 1,3);
solution.addMove("id13", 1,5);
solution.addMove("id8", 3,4);
solution.addMove("id10", 3,4);
solution.addMove("id12", 2,2);
solution.addMove("id14", 4,2);
solution.addMove("id15", 4,1);
solution.addMove("id11", 2,1);
solution.addMove("id7", 0,1);
solution.addMove("id6", 0,3);
solution.addMove("id13", 0,5);
solution.addMove("id10", 2,5);
solution.addMove("id5", 1,2);
solution.addMove("id10", 1,4);
solution.addMove("id13", 1,5);
solution.addMove("id6", 0,4);
solution.addMove("id10", 3,4);
solution.addMove("id5", 1,3);
solution.addMove("id7", 0,2);
solution.addMove("id11", 0,1);
solution.addMove("id15", 2,1);
solution.addMove("id14", 4,1);
solution.addMove("id12", 2,1);
solution.addMove("id10", 3,3);
solution.addMove("id8", 3,3);
solution.addMove("id13", 3,5);
solution.addMove("id5", 2,4);
solution.addMove("id10", 1,5);
solution.addMove("id5", 2,3);
solution.addMove("id10", 2,5);
solution.addMove("id6", 1,3);
solution.addMove("id10", 0,5);
solution.addMove("id6", 1,4);
solution.addMove("id5", 2,4);
solution.addMove("id6", 1,3);
solution.addMove("id5", 2,3);
solution.addMove("id10", 2,5);
solution.addMove("id6", 0,4);
solution.addMove("id5", 1,4);
solution.addMove("id10", 3,3);
solution.addMove("id5", 2,3);
solution.addMove("id6", 1,3);
solution.addMove("id13", 0,5);
solution.addMove("id8", 3,4);
solution.addMove("id10", 4,3);
solution.addMove("id5", 3,3);
solution.addMove("id6", 2,3);
solution.addMove("id13", 1,5);
solution.addMove("id7", 0,4);
solution.addMove("id11", 0,3);
solution.addMove("id15", 0,1);
solution.addMove("id12", 0,1);
solution.addMove("id9", 4,2);
solution.addMove("id12", 1,0);
solution.addMove("id9", 1,2);
solution.addMove("id14", 2,2);
solution.addMove("id9", 0,2);
solution.addMove("id14", 1,2);
solution.addMove("id10", 2,2);
solution.addMove("id5", 4,1);
solution.addMove("id10", 4,3);
solution.addMove("id6", 3,3);
solution.addMove("id14", 3,2);
solution.addMove("id9", 2,4);
solution.addMove("id14", 2,3);
solution.addMove("id11", 2,2);
solution.addMove("id7", 0,2);
solution.addMove("id13", 0,5);
solution.addMove("id9", 2,5);
solution.addMove("id14", 0,4);
solution.addMove("id6", 1,3);
solution.addMove("id10", 2,3);
solution.addMove("id8", 3,3);
solution.addMove("id9", 3,5);
solution.addMove("id10", 2,5);
solution.addMove("id9", 4,5);
solution.addMove("id10", 3,5);
solution.addMove("id6", 2,4);
solution.addMove("id14", 1,4);
solution.addMove("id7", 0,3);
solution.addMove("id11", 0,2);
solution.addMove("id6", 2,2);
solution.addMove("id8", 2,3);
solution.addMove("id10", 2,5);
solution.addMove("id9", 3,5);
solution.addMove("id8", 3,3);
solution.addMove("id6", 3,2);
solution.addMove("id10", 2,2);
solution.addMove("id9", 2,3);
solution.addMove("id8", 2,4);
solution.addMove("id5", 4,4);
solution.addMove("id6", 4,1);
solution.addMove("id9", 4,3);
solution.addMove("id10", 3,2);
solution.addMove("id14", 2,2);
solution.addMove("id7", 2,3);
solution.addMove("id11", 0,4);
solution.addMove("id14", 0,3);
solution.addMove("id10", 1,3);
solution.addMove("id7", 2,2);
solution.addMove("id8", 2,3);
solution.addMove("id13", 2,5);
solution.addMove("id11", 0,5);
solution.addMove("id14", 0,4);
solution.addMove("id10", 0,2);
solution.addMove("id7", 1,2);
solution.addMove("id8", 2,2);
solution.addMove("id14", 0,3);
solution.addMove("id11", 0,4);
solution.addMove("id13", 0,5);
solution.addMove("id5", 2,4);
solution.addMove("id9", 3,5);
solution.addMove("id6", 4,4);
solution.addMove("id8", 3,1);
solution.addMove("id9", 4,3);
solution.addMove("id5", 2,3);
solution.addMove("id13", 2,5);
solution.addMove("id11", 0,5);
solution.addMove("id14", 1,4);
solution.addMove("id10", 0,4);
solution.addMove("id7", 0,2);
solution.addMove("id5", 2,2);
solution.addMove("id14", 3,3);
solution.addMove("id13", 2,4);
solution.addMove("id11", 2,5);
solution.addMove("id10", 1,5);
solution.addMove("id7", 0,4);
solution.addMove("id5", 0,2);
solution.addMove("id14", 1,2);
solution.addMove("id9", 2,2);
solution.addMove("id13", 2,3);
solution.addMove("id6", 4,3);
solution.addMove("id11", 3,5);
solution.addMove("id10", 3,4);
solution.addMove("id7", 1,4);
solution.addMove("id5", 0,4);
solution.addMove("id13", 0,3);
solution.addMove("id9", 3,3);
solution.addMove("id14", 2,2);
solution.addMove("id15", 1,2);
solution.addMove("id13", 1,3);
solution.addMove("id5", 0,1);
solution.addMove("id13", 0,3);
solution.addMove("id7", 0,4);
solution.addMove("id11", 1,5);
solution.addMove("id6", 4,4);
solution.addMove("id9", 2,4);
solution.addMove("id8", 2,2);
solution.addMove("id6", 4,1);
solution.addMove("id10", 4,5);
solution.addMove("id9", 4,3);
solution.addMove("id11", 2,5);
solution.addMove("id10", 4,4);
solution.addMove("id11", 3,5);
solution.addMove("id10", 1,5);
solution.addMove("id9", 2,5);
solution.addMove("id8", 3,3);
solution.addMove("id9", 3,2);
solution.addMove("id13", 2,3);
solution.addMove("id7", 0,3);
solution.addMove("id10", 1,4);
solution.addMove("id11", 0,5);
solution.addMove("id8", 3,4);
solution.addMove("id10", 2,5);
solution.addMove("id13", 1,4);
solution.addMove("id9", 4,3);
solution.addMove("id14", 3,2);
solution.addMove("id13", 2,4);
solution.addMove("id14", 3,3);
solution.addMove("id15", 3,2);
solution.addMove("id7", 1,2);
solution.addMove("id13", 0,4);
solution.addMove("id14", 2,3);
solution.addMove("id10", 3,3);
solution.addMove("id14", 2,5);
solution.addMove("id10", 2,3);
solution.addMove("id9", 3,3);
solution.addMove("id8", 3,3);
solution.addMove("id14", 4,5);
solution.addMove("id11", 2,5);
solution.addMove("id13", 0,5);
solution.addMove("id10", 0,3);
solution.addMove("id9", 0,4);
solution.addMove("id15", 1,4);
solution.addMove("id8", 2,2);
solution.addMove("id15", 4,3);
solution.addMove("id11", 3,4);
solution.addMove("id13", 1,4);
solution.addMove("id9", 0,5);
solution.addMove("id13", 0,4);

