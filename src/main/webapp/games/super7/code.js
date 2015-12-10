
var boxCount = new Object();
var owner = new Object();
var boxOwner = new Object();
var boardCount = new Object();

for ( i = 3; i < 12; i ++  ) {
  owner[i] = new Object();
  boxOwner[i] = -1;
  for ( j = 3; j < 12; j ++ ) {
    owner[i][j] = -1;
  }
  boxCount[ i ] = new Object();
  for ( p = 0; p < 2; p ++ ) {
    boxCount[i][p] = 0;
  }
}

for ( p = 0; p < 2; p ++ ) {
  boardCount[p] = 0;
}



var hasMoved = true;
var diceTotal = 0;
var player = 0;
var colours = new Array();
colours[0] = "#ff0000";
colours[1] = "#00ff00";
colourLabels = new Array();

colourLabels[0] = "Red";
colourLabels[1] = "Green";

function writeBoard()
{
  var x;
  var y;
  var box;

  document.write( '<table border="1" cellspacing="0" cellpadding="10" >' );

  for ( y = 0; y < 3; y ++ ) {
    document.writeln( "<tr>" );
    for ( x = 0; x < 3; x ++ ) {

      box = 3 + x + y * 3;

      document.writeln( "<td>" );
      writeBox( box );
      document.writeln( "</td>" );
    }
    document.writeln( "</tr>" );
  }
  document.writeln( "</table>" );
}

function writeBox( box )
{
  var x;
  var y;
  var n
  var contents;

  document.writeln( '<table border="0" cellspacing="0" cellpadding="0" background="images/box' + box + '.png">' );
  for ( y = 0; y < 3; y ++ ) {
    document.writeln( "<tr>" );
    for ( x = 0; x < 3; x ++ ) {
      n = 3 + x + y * 3;
      var id = "square" + ( (box-3) * 9 + n - 3);
      contents = '<a href="#" onClick="doClick( ' + box + ',' + n + ' )"><img id="' + id + '" border="0" src="images/number' + n + '.png"></a>';
      document.writeln( "<td name=box" + n + " width=20 height=20 align=right>" + contents + "</td>" );
    }
    document.writeln( "</tr>" );
  }
  document.writeln( "</table>" );
}


function completeBox( box )
{
  alert( "Sorry, that hasn't been written yet!" );
}


function doClick( box, m )
{

  if ( hasMoved ) {
    alert( "You have already moved! Roll again." );
    return;
  }

  if ( ( box != diceTotal ) && ( m != diceTotal ) && ( diceTotal != 2 ) && ( diceTotal != 12 ) ) {
    alert( "That is not the number on the dice!" );
    return;
  }

  if ( ( m == 7 ) && ( diceTotal != 7 ) ) {
    alert( "You can only go in the center of a box when you throw a 7" );
    return;
  }

  if ( (owner[box][m] != -1) && ( diceTotal != 12 ) ) {
    alert( "That square is already occupied." );
    return;
  }

  if ( (owner[box][m] != 1 - player) && ( diceTotal == 12 ) ) {
    alert( "You must remove one of your opponents pieces." );
    return;
  }

  if ( boxOwner[box] != -1 ) {
    alert( "That box is already owned. No more moves can be placed in that box." );
    return;
  }

  setSquare( box, m, player );

  if ( (boxCount[box][player] >= 5) || hasLineOfThree( owner[box], player ) ) {
    fillBox( box, player );

    if ( hasLineOfThree( boxOwner, player ) || (boardCount[player] >= 5) ) {
      alert( "You Win!" );
    }
  }

  hasMoved = true;
  player = 1 - player;
  document.theForm.instructions.value = "Roll the dice...";
  document.images[ "player" ].src = "images.dice.png";
}


function fillBox( box, player )
{
  var s;

  boxOwner[box] = player;
  boardCount[player] ++;

  for ( s = 3; s < 12; s ++ ) {
    setSquare( box, s, player );
  }


}


function setSquare( box, square, player )
{
  var n = (box-3) * 9 + square - 3;
  var id = "square" + n;

  if ( owner[box][square] != -1 ) {
    boxCount[box][ owner[box][square] ]--;
  }

  owner[box][square] = player;
  boxCount[box][player] ++;

  document.images[ id ].src = "images/player" + player + ".png";
}



function hasLineOfThree( theArray, player )
{

  var i;
  var j;
  var v;
  var result;

  for ( i = 0; i < 3; i ++ ) {
    result = true;
    for ( j = 0; j < 3; j ++ ) {
      v = theArray[ 3 + i + j * 3 ];
      if ( v != player ) {
        result = false;
      }
    }
    if ( result ) {
      return true;
    }
  }

  for ( i = 0; i < 3; i ++ ) {
    result = true;
    for ( j = 0; j < 3; j ++ ) {
      v = theArray[ 3 + j + i * 3 ];
      if ( v != player ) {
        result = false;
      }
    }
    if ( result ) {
      return true;
    }
  }


  if ( theArray[7] != player ) {
    return false;
  }


  if ( (theArray[3] == player) && (theArray[11] == player) ) {
    return true;
  }

  if ( (theArray[5] == player) && (theArray[9] == player) ) {
    return true;
  }

  return false;

}


function rollDice()
{
  var d1;
  var d2;

  d1 = Math.round( Math.random()* 6 ) + 1;
  if ( d1 == 7 ) d1 = 1;
  d2 = Math.round( Math.random()* 6 ) + 1;
  if ( d2 == 7 ) d2 = 1;

  document.theForm.instructions.value = "You got a " + d1 + " and a " + d2 + "\n";

  diceTotal = d1 + d2;
  hasMoved = false;


  document.images[ "dice1" ].src = "images/dice" + d1 + ".png";
  document.images[ "dice2" ].src = "images/dice" + d2 + ".png";
  document.images[ "player"].src = "images/player" + player + ".png";
}

function pass()
{
  hasMoved = true;
  player = 1-player;

  document.images[ "dice1" ].src = "images/dice.png";
  document.images[ "dice2" ].src = "images/dice.png";
  document.images[ "player"].src = "images/dice.png";
}


