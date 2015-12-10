board = new Board( 9, 9, 30, 30, 26, 35 );
board.background = "background.png";

var piece1 = new Piece( "1", "piece1.png" );
piece1.addElement( 0, 0 );
piece1.addElement( 1, 0 );
piece1.addElement( 2, 0 );
piece1.addElement( 0, 1 );
piece1.addElement( 1, 1 );
piece1.addElement( 2, 1 );

var piece2 = new Piece( "2", "piece2.png" );
piece2.addElement( 0, 0 );
piece2.addElement( 2, 0 );
piece2.addElement( 0, 1 );
piece2.addElement( 1, 1 );
piece2.addElement( 2, 1 );
piece2.addElement( 0, 2 );
piece2.addElement( 2, 2 );
piece2.addElement( 2, 2 );
piece2.addElement( 0, 3 );
piece2.addElement( 1, 3 );
piece2.addElement( 2, 3 );

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
piece4.addElement( 2, 1 );


var piece5 = new Piece( "5", "piece5.png" );
piece5.addElement( 0, 0 );
piece5.addElement( 1, 0 );
piece5.addElement( 2, 0 );
piece5.addElement( 0, 1 );
piece5.addElement( 1, 1 );
piece5.addElement( 2, 1 );
piece5.addElement( 0, 2 );
piece5.addElement( 1, 2 );
piece5.addElement( 2, 2 );
piece5.addElement( 0, 3 );
piece5.addElement( 1, 3 );
piece5.addElement( 2, 3 );

var piece6 = new Piece( "6", "piece6.png" );
piece6.addElement( 0, 0 );
piece6.addElement( 1, 0 );
piece6.addElement( 2, 0 );
piece6.addElement( 0, 1 );
piece6.addElement( 1, 1 );
piece6.addElement( 2, 1 );
piece6.addElement( 0, 2 );
piece6.addElement( 1, 2 );
piece6.addElement( 2, 2 );



var piece7 = new Piece( "7", "piece7.png" );
piece7.addElement( 0, 0 );
piece7.addElement( 2, 0 );
piece7.addElement( 0, 1 );
piece7.addElement( 1, 1 );
piece7.addElement( 2, 1 );
piece7.addElement( 0, 2 );
piece7.addElement( 1, 2 );
piece7.addElement( 2, 2 );




board.setFixed( 4,0 );
board.addPiece( piece4, 0,0 );
board.addPiece( piece5, 0,2 );
board.addPiece( piece6, 0,6 );
board.addPiece( piece1, 6,0 );
board.addPiece( piece2, 6,2 );
board.addPiece( piece3, 6,6 );
board.addPiece( piece7, 3,0 );


solution = new Solution();
solution.addMove("id4",3,6)
solution.addMove("id3",0,5)
solution.addMove("id2",3,4)
solution.addMove("id3",0,0)
solution.addMove("id2",0,4)
solution.addMove("id4",0,6)
solution.addMove("id8",3,6)
solution.addMove("id6",3,0)
solution.addMove("id5",3,4)
solution.addMove("id7",6,0)
solution.addMove("id8",6,3)
solution.addMove("id4",6,6)
solution.addMove("id2",3,7)
solution.addMove("id5",3,5)
solution.addMove("id3",0,5)
solution.addMove("id6",0,0)
solution.addMove("id5",3,1)
solution.addMove("id2",3,3)
solution.addMove("id4",3,5)
solution.addMove("id8",6,6)
solution.addMove("id2",6,4)
solution.addMove("id4",3,3)
solution.addMove("id8",3,6)
solution.addMove("id2",6,7)
solution.addMove("id7",6,4)
solution.addMove("id5",6,0)
solution.addMove("id4",3,1)
solution.addMove("id8",3,4)
solution.addMove("id2",3,7)
solution.addMove("id7",6,6)
solution.addMove("id5",6,4)
solution.addMove("id4",6,0)
solution.addMove("id8",3,0)
solution.addMove("id2",3,3)
solution.addMove("id5",6,3)
solution.addMove("id3",3,5)
solution.addMove("id6",0,5)
solution.addMove("id2",0,0)
solution.addMove("id8",0,2)
solution.addMove("id5",3,3)
solution.addMove("id4",6,3)
solution.addMove("id5",6,0)
solution.addMove("id3",3,1)
solution.addMove("id7",3,6)
solution.addMove("id4",6,6)
solution.addMove("id3",6,2)
solution.addMove("id8",3,0)
solution.addMove("id6",0,2)
solution.addMove("id7",0,6)
solution.addMove("id4",3,6)
solution.addMove("id3",6,5)
solution.addMove("id5",3,4)
solution.addMove("id3",6,0)
solution.addMove("id4",6,6)
solution.addMove("id7",3,6)
solution.addMove("id6",0,5)
solution.addMove("id5",0,3)
solution.addMove("id8",3,3)
solution.addMove("id2",3,1)
solution.addMove("id5",0,0)
solution.addMove("id6",0,2)
solution.addMove("id7",0,6)
solution.addMove("id8",3,6)
solution.addMove("id2",6,4)
solution.addMove("id8",3,0)
solution.addMove("id2",3,4)
solution.addMove("id4",3,6)
solution.addMove("id3",6,5)
solution.addMove("id2",6,0)
solution.addMove("id3",6,2)
solution.addMove("id4",6,6)

