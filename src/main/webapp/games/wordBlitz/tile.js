function Tile( board, x, y, letter )
{
  this.board = board;
  this.x = x;
  this.y = y;
  this.letter = letter;

  this.isMoving = false;
  this.isReplacing = false;
  this.isDown = false;
  this.topWeight = y;
}

Tile.prototype.toString = function()
{
  return "Tile (" + this.x + "," + this.y + ") = " +
    ( (this.letter == null)
      ? "empty"
      : this.letter.character );
}


Tile.prototype.getId = function()
{
  return "tile_" + this.x + "_" + this.y;
}

Tile.prototype.getImage = function()
{
  return ww_findObj( this.getId(), this.board.document );
}

Tile.prototype.setDown = function()
{
  if ( this.letter != null ) {
    this.getImage().src = this.letter.downImageSrc;
  }
  this.isDown = true;
}

Tile.prototype.setUp = function()
{
  if ( this.letter != null ) {
    this.getImage().src = this.letter.upImageSrc;
    this.getImage().style.visibility = "visible";
  }
  this.isDown = false;
}

Tile.prototype.setLetter = function( letter )
{
  // this.isDown = false;

  if ( letter == null ) {
    this.remove();
  } else {
    this.letter = letter;
    this.getImage().style.visibility = "visible";
    if ( this.isDown ) {
      this.setDown();
    } else {
      this.setUp();
    }
  }
}

Tile.prototype.remove = function()
{
  this.letter = null;
  this.getImage().style.visibility = "hidden";
  this.isDown = false;
 // this.isMoving = false;
}

Tile.prototype.canMove = function()
{
  if ( this.isMoving || this.isDown ) {
    return false;
  }

  return (this.letter != null);
}

Tile.prototype.setPosition = function( left, top )
{
  if ( left == null ) {
    left = this.board.offsetLeft + Board.TILE_WIDTH * this.x;
  }

  if ( top == null ) {
    top = this.board.offsetTop + Board.TILE_HEIGHT * this.y;
  }

  this.getImage().style.left = left + "px";
  this.getImage().style.top = top + "px";
}


