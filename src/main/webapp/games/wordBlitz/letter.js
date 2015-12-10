function Letter( character, points, frequency, upImageSrc, downImageSrc )
{
  var image = new Image();

  this.character = character;
  this.points = points;
  this.frequency = frequency;

  if ( upImageSrc == null ) {
    this.upImageSrc = "images/" + character + ".png";
  } else {
    this.upImageSrc = upImageSrc;
  }

  if ( downImageSrc == null ) {
    this.downImageSrc = "images/" + character + "-down.png";
  } else {
    this.downImageSrc = downImageSrc;
  }

  image.src = this.upImageSrc;
  image.src = this.downImageSrc;

}

Letter.letters = new Array();

Letter.random = function()
{
  var choices = Letter.letters.length;
  var choice = Math.floor( Math.random() * choices );
  if ( choice >= choices ) {
    // If Math.random returned 1.0, then we don't want that!!!
    choice = 0;
  }

  return Letter.letters[ choice ];
}

Letter.add = function( letter )
{
  var n;

  for ( n = 0; n < letter.frequency; n ++ ) {
    Letter.letters[ Letter.letters.length ] = letter;
  }
}

