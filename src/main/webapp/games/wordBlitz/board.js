function Board( width, height )
{
  this.document = document;
  this.width = width;
  this.height = height;

  this.movingTiles = new Array();

  this._rows = new Array( height );
  var i;
  for ( i = 0; i < height; i ++ ) {
    this._rows[ i ] = new Array( width );
  }

  this.offsetTop = 10;
  this.offsetLeft = 10;
}


Board.TILE_WIDTH = 40;
Board.TILE_HEIGHT = 40;

Board.prototype.getTile = function( x, y )
{
  // Bounds checking
  if ( ( x < 0 ) || ( y < 0 ) || ( x >= this.width ) || ( y >= this.height ) ) {
    return null;
  }

  return (this._rows[y])[x];
}

Board.prototype.setTile = function( x, y, tile )
{
  (this._rows[y])[x] = tile;
}

Board.prototype.generate = function()
{
  var i, j, letter, tile;

  for ( i = 0; i < this.width; i ++ ) {
    for ( j = 0; j < this.height; j ++ ) {
      letter = Letter.random();
      tile = new Tile( this, i, j, letter );

      this.setTile( i, j, tile );
    }
  }
}


Board.prototype.write = function()
{

  var i, j;
  var letter;
  var html, style;

  for ( j = 0; j < this.height; j ++ ) {
    for ( i = 0; i < this.width; i ++ ) {

      letter = this.getTile( i, j ).letter;
      style = "position: absolute; top: " + (j * Board.TILE_HEIGHT + this.offsetTop) + "px; left: " + (i * Board.TILE_WIDTH + this.offsetLeft) + "px;";
      html = "<img style=\"" + style + "\" onclick=\"parent.game.onClickTile( " + i + "," + j + " )\" id=\"" + this.getTileId( i, j ) + "\" src=\"" + letter.upImageSrc + "\" alt=\"" + letter.character + "\" />";
      this.document.write( html );
    }

    this.document.write( "<br/>" );
  }

}

Board.prototype.getTileId = function( x, y )
{
  return this.getTile( x, y ).getId();
}

Board.prototype.removeTile = function( tile )
{
  // log += "Removing : " + tile + "\n";
  tile.remove();

  // Skip the rest at the top left.
  if ( (tile.x == 0) && (tile.y == 0) ) {
    return;
  }

  var i, j, tileToMove;
  var moved = false;


  for ( j = tile.y - 1; j >= 0; j -- ) {
    tileToMove = this.getTile( tile.x, j );

    if ( tileToMove.canMove() ) {

      moved = true;
      this.moveTile( tileToMove, 0, 1 );
      // log += "moving down : " + tileToMove + "\n";

    } else {
      break;
    }
  }

  if ( ! moved ) {

    for ( i = tile.x - 1; i >= 0; i -- ) {
      tileToMove = this.getTile( i, tile.y );

      if ( tileToMove.canMove() ) {

        moved = true;
        this.moveTile( tileToMove, 1, 0 );
        // log += "moving across : " + tileToMove + "\n";

      } else {
        break;
      }
    }

  }


}

Board.prototype.moveTile = function( tile, dx, dy )
{
  this.movingTiles[ this.movingTiles.length ] = new MovingTile( this, tile, dx, dy );
  if ( this.movingTiles.length == 1 ) {
    window.setTimeout( "board.timerEvent()", 1 );
  }
}

Board.prototype.timerEvent = function()
{
  var n;

  for ( n = 0; n < this.movingTiles.length; n ++ ) {

    if ( this.movingTiles[ n ] != null ) {
      if ( this.movingTiles[ n ].act() ) {
        // remove it from the list.
        this.movingTiles[ n ] = null;

        if ( n == this.movingTiles.length - 1 ) {
          for ( m = this.movingTiles.length -1; m >= 0; m -- ) {
            if ( this.movingTiles[ m ] == null ) {
              this.movingTiles.length --;
            } else {
              break;
            }
          }
        }

      }
    }
  }

  // Repeat the timer if there are more things to action.
  if ( this.movingTiles.length != 0 ) {
    window.setTimeout( "board.timerEvent()", 50 );
  } else {
    // alert( "Idle" );
  }


}

Board.prototype.setOffsets = function( left, top )
{
  this.offsetLeft = left;
  this.offsetTop = top;

  var i, j;

  for ( i = 0; i < this.width; i ++ ) {
    for ( j = 0; j < this.height; j ++ ) {
      this.getTile( i, j ).setPosition();
    }
  }
}


