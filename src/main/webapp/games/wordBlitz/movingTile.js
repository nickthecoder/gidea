function MovingTile( board, tile, dx, dy )
{
  this.board = board;
  this.tile = tile;
  this.dx = dx;
  this.dy = dy;

  this.stepSize = 8;
  this.step = 0;
  this.remaining = Math.floor(  Board.TILE_WIDTH / this.stepSize );


  this.newX = this.tile.x + this.dx;
  this.newY = this.tile.y + this.dy;
  this.otherTile = board.getTile( this.newX, this.newY );

  this.tile.isMoving = true;
  this.otherTile.isReplacing = true;
  //alert( this.otherTile + " being replaced" );
}

MovingTile.prototype.act = function()
{
  this.remaining --;
  this.step ++;

  if ( this.remaining <= 0 ) {
    // switch the letters over.


    if ( this.otherTile.letter == null ) {

      this.otherTile.setLetter( this.tile.letter );
      this.tile.setLetter( null );

      this.tile.setPosition( (Board.OFFSET_X + Board.TILE_WIDTH * this.tile.x), (Board.OFFSET_Y + Board.TILE_HEIGHT * this.tile.y) );

      this.tile.isMoving = false;
      this.otherTile.isReplacing = false;

      // Now check if we can move down/across yet again.
      var tx = this.otherTile.x + this.dx;
      var ty = this.otherTile.y + this.dy;
      var nextTile = this.board.getTile( tx, ty );
      // alert( "Looking at tile : " + nextTile );
      if ( nextTile != null ) {
        if ( (( nextTile.letter == null ) || ( nextTile.isMoving )) && ( nextTile.isReplacing == false ) ) {
          this.board.moveTile( this.otherTile, this.dx, this.dy );
        }
      }

      // Now check if the space that is now vacant needs tiles moving in from the left.
      // alert( "Checking : " + this.tile + " : " + this.tile.isReplacing );
      if ( this.tile.isReplacing == false) {

        if ( this.dy != 0 ) {

          for ( i = this.tile.x - 1; i >= 0; i -- ) {
            var tile = this.board.getTile( i, this.tile.y );
            if ( tile.canMove() ) {
              this.board.moveTile( tile, 1, 0 );
            } else {
              break;
            }
          }

        } else {

          for ( j = this.tile.y - 1; j >= 0; j -- ) {
            var tile = this.board.getTile( this.tile.x, j );
            if ( tile.canMove() ) {
              this.board.moveTile( tile, 0, 1 );
            } else {
              break;
            }
          }

        }

      }

      return true;

    } else {
      return false;
    }

  } else {

    if ( this.dx != 0 ) {
      var x = Board.OFFSET_X + Board.TILE_WIDTH * this.tile.x + this.dx * this.stepSize * this.step;
      this.tile.getImage().style.left = x + "px";
    }

    if ( this.dy != 0 ) {
      var y = Board.OFFSET_Y + Board.TILE_HEIGHT * this.tile.y + this.dy * this.stepSize * this.step
      //alert( "Old :  " + this.tile.getImage().style.top );
      this.tile.getImage().style.top = y + "px";
      //alert( "Moved " + this.tile + " up/down to : " + y );
    }

    return false;
  }

}

