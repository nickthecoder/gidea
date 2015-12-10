function Dictionary()
{
  this.stems = new Object();
  this.view = document;
  this.data = null;
  this.latestWord = "";
  this.disabled = false;
}

Dictionary.create = function()
{
  return new Dictionary();
}

function a( word )
{
  dictionary.add( word );
}

function testDictionary( word )
{
  alert( "Looking up " + word + " - " + dictionary.exists( word ) );
}

Dictionary.prototype.add = function( word )
{
  this.latestWord = word;
  if ( word.length < 3 ) {
    // alert( "Adding short word" );
    this.add2( word, "" );
  } else {
    var stem = word.substring( 0, 3 );
    var rest = word.substring( 3 );
    this.add2( stem, rest );
  }
}


Dictionary.prototype.add2 = function( stem, rest )
{
  if ( this.stems[ stem ] == null ) {
    this.stems[ stem ] = new Object();

    if ( this.data != null ) {
      this.data.write( stem );
      this.data.write( "<br/>" );
    }

  }

  if ( rest == "" ) {
    rest = "_blank";
  }

  this.stems[ stem ][ rest ] = true;
}

Dictionary.prototype.exists = function( word )
{
  // If the dictionary hasn't been loaded, then allow anything.
  // This is useful during development.
  if ( this.disabled ) {
    return true;
  }



  if ( word.length < 3 ) {
    // alert( "Looking up short word" );
    return this.exists2( word, "" );
  } else {
    var stem = word.substring( 0, 3 );
    var rest = word.substring( 3 );
    return this.exists2( stem, rest );
  }
}

Dictionary.prototype.exists2 = function( stem, rest )
{
  if ( rest == "" ) {
    rest = "_blank";
  }

  if ( this.stems[ stem ] == null ) {
    return false;
  }

  return this.stems[ stem ] [ rest ] == true;

}

