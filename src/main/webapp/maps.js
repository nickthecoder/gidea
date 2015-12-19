map = null;

function getParameter( name, from )
{
    var results = getParameters( name, from );
    if (results == null) {
        return null;
    } else {
        return results[0];
    }
}

function getParameters( name, from )
{
    if (! from) {
        from = window.location.href;
    } else {
        // When searching an arbitrary string, add & to the beginning so that it will find the first NAME=VALUE.
        from = "&" + from;
    }
    
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS, "g" );
    
    var results = [];
    var matched = regex.exec( from );
    while (matched != null) {
        results[results.length] = decodeURIComponent( matched[1] );
        matched = regex.exec( from );
    }
    
    return results;
}

function getNumberParameter( name, defaultValue, from )
{
    var value = getParameter( name, from );
    if (value == null) {
        return defaultValue;
    } else {
        return 1 * value;
    }
}

function escapeHTML(unsafe)
{
    if (unsafe == null) return "";
    
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function hamburger()
{
    var menu = document.getElementById( "menu" );
    showHamburger( ! menu.shown );
}

function showHamburger( show )
{
    var menu = document.getElementById( "menu" );
    if (show) {
        menu.shown = true;
        menu.style.visibility = "visible";
        showSearchResults( null );
    } else {
        menu.shown = false;
        menu.style.visibility = "hidden";
    }
}

function showSearchResults( html )
{
    if (html == null) {
        document.getElementById("search").style.visibility = 'hidden';
    } else {
        showHamburger( false );
        document.getElementById("searchContent").innerHTML = html;
        document.getElementById("search").style.visibility = 'visible';
    }
}

function leaflet_load()
{
    map = new LeafletWrapper();
    initialiseMap();
}

function googleMap_load()
{
    map = new GoogleMapWrapper();
    initialiseMap();
}

function initialiseMap()
{
    var lat = getNumberParameter( "lat", 51.5743537 );
    var lng = getNumberParameter( "lng", 0.1983946 );
    var zoom = getNumberParameter( "zoom", 11 );
    var mapType = getNumberParameter( "mapType", 1 );
    
    var label = getParameter( "marker" );
    var mlat = getNumberParameter( "mlat", lat );
    var mlng = getNumberParameter( "mlng", lng );

    map.initialise( lat, lng, zoom, label, mlat, mlng, mapType );
    
    var ms = getParameters( "m" );
    for ( var i = 0; i < ms.length; i ++ ) {
        try {
            parseMarkerParameter( ms[i] );
        } catch(err) {
            // Do nothing
        }
    }    
    buildMarkerList();
}

function parseMarkerParameter( m )
{
    var lat = getNumberParameter( "lat", null, m );
    var lng = getNumberParameter( "lng", null, m );
    var label = getParameter( "l", m );
           
    if ( (lat != null) && (lng != null) && (label != null) ) {
        map.createMarker( label, lat, lng );
    }
}

function copyLink( page )
{
    var url = getMapUrl( page );
    if (window.prompt( "Copy the address using using Ctrl+C", url ) != null) {
        document.location = url;
    }
}

function followLink( page, mapType )
{
    var url = getMapUrl( page, mapType );    
    document.location = url;
}

function changeLink( id, page, mapType )
{
    var url = getMapUrl( page, mapType );
    document.getElementById( id ).href = url;
}

function getMapUrl( page, mapType )
{
    var latLng = map.getCenter();
    var zoom = map.getZoom();
    
    if (! mapType) {
        mapType = map.getMapType();
    }

    var url = page + "?lat=" + latLng.lat + "&lng=" + latLng.lng + "&zoom=" + zoom;

    if ( mapType != 1 ) {
        url += '&mapType=' + mapType;
    }

    for ( var i = 0; i < map.markers.length; i ++ ) {
        var marker = map.markers[ i ];
        var pos = marker.getPosition();
        var value = 'lat=' + pos.lat + '&lng=' + pos.lng + '&l=' + encodeURIComponent( marker.getLabel() );
        url += '&m=' + encodeURIComponent( value );
    }
    
    return url;
}

function createGoogleMapLink()
{
    var latLng = map.getCenter();
    var zoom = map.getZoom();

    var url = "http://maps.google.co.uk/maps?ll=" + latLng.lat + "," + latLng.lng + "&z=" + zoom;
    document.getElementById( "googleMapLink" ).href = url;
    return url;
}

function googleMapLink()
{ 
    document.location = createGoogleMapLink();
}


function createOpenStreetMapLink()
{
    var latLng = map.getCenter();
    var zoom = map.getZoom();

    var url = "http://www.openstreetmap.org/?lat=" + latLng.lat + "&lon=" + latLng.lng + "&zoom=" + zoom;
    document.getElementById( "openStreetMapLink" ).href = url;
    return url;
}

function openStreetMapLink()
{ 
    document.location = createOpenStreetMapLink();
}

function buildMarkerList()
{
    var list = document.getElementById( "markers" );
    var html = "";
    for ( var i = 0; i < map.markers.length; i ++ ) {
        var marker = map.markers[i];
        var li = '<li><a href="#" onclick="selectMarker('+i+'); return false;">' + escapeHTML( marker.getLabel() ) + '</a><a href="#" class="right" onclick="deleteMarker('+i+'); return false;">x</li>';
        html += li;
    }
    list.innerHTML = html;
}

function selectMarker( n )
{
    map.setCenter( map.markers[n].getPosition() );
}

function addMarker()
{
    var label = window.prompt( "Add a Marker", "unnamed" );
    var c = map.getCenter();
    if (label != null) {
        map.createMarker( label, c.lat, c.lng );
        buildMarkerList();
    }
}

function deleteMarker( n )
{
    map.deleteMarker(n);
    buildMarkerList();    
}

// BASE

function AbstractMarkerWrapper()
{
}

AbstractMarkerWrapper.prototype.editMarker = function()
{
    var newLabel = window.prompt( "Marker", this.getLabel() );
    if (newLabel != null) {
        this.setLabel( newLabel );
    }
    buildMarkerList();
}

function AbstractWrapper()
{
}

AbstractWrapper.prototype.initialise = function()
{
    this.markers = [];    
};

AbstractWrapper.prototype.markerCount = function()
{
    return this.markers.length;
}

// LEAFLET

function LeafletMarkerWrapper( label, lat, lng )
{
    this.label = label;
    this.marker = L.marker( [lat,lng], {draggable:true, title: label} );
    this.marker.addTo(map.map);
    var me = this;
    this.marker.on( 'click', function() {
        me.editMarker();
    } );
}

LeafletMarkerWrapper.prototype = Object.create(AbstractMarkerWrapper.prototype);
LeafletMarkerWrapper.prototype.constructor = LeafletMarkerWrapper;

LeafletMarkerWrapper.prototype.getPosition = function()
{
    var c = this.marker.getLatLng();
    return { lat: c.lat, lng: c.lng };            
};

LeafletMarkerWrapper.prototype.getLabel = function()
{
    return this.label;
};

LeafletMarkerWrapper.prototype.setLabel = function( label )
{
    this.label = label;
    var pos = this.marker.getLatLng();
    map.map.removeLayer( this.marker );
    this.marker = L.marker( [pos.lat,pos.lng], {draggable:true, title: label} );
    this.marker.addTo(map.map);
    var me = this;
    this.marker.on( 'click', function() {
        me.editMarker();
    } );
};

function LeafletWrapper()
{
}
LeafletWrapper.prototype = Object.create(AbstractWrapper.prototype);
LeafletWrapper.prototype.constructor = LeafletWrapper;

LeafletWrapper.prototype.initialise = function( lat, lng, zoom, label, mlat, mlng, mapType )
{
    AbstractWrapper.prototype.initialise.call( this );
    
    this.label = null;
    this.marker = null;
    this.mapType = 1;

    this.map = L.map('map', {scrollWheelZoom: false} ).setView([lat,lng], zoom);
    this.mapType = mapType;

    // Standard Open Street Map tiles
    //L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //}).addTo(this.map);
    
    // Mapbox tiles (better looking than the standard Open Street Map tiles)
    // Choose either the "emerald" street map style, or the hybrid "satellite + streets" style.
    var id = mapType > 1 ? 'nickthecoder.o6c2fj3n' : 'nickthecoder.cih2nmf1w00obrllyqjq8j0ex';
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: id,
        accessToken: 'pk.eyJ1Ijoibmlja3RoZWNvZGVyIiwiYSI6ImNpaDJubWZhODAwcXJ2cWtyNW14bTRyZW4ifQ.-eeDoDI8ky5KjLLp3GLl1Q#4/51.45/-2.58'
    }).addTo(this.map);

    if (label != null) {
        this.label = label;
        this.createMarker( label, mlat, mlng );
    }
};
    
LeafletWrapper.prototype.getCenter = function()
{
    var c = this.map.getCenter();
    return { lat: c.lat, lng: c.lng };
};

LeafletWrapper.prototype.setCenter = function( pos )
{
    this.map.panTo( [pos.lat, pos.lng] );
};

LeafletWrapper.prototype.getZoom = function()
{
    return this.map.getZoom();
};

LeafletWrapper.prototype.getMapType = function()
{
    return this.mapType;
};

LeafletWrapper.prototype.createMarker = function( label, lat, lng )
{
    this.markers[ this.markers.length ] = new LeafletMarkerWrapper( label, lat, lng );
};

LeafletWrapper.prototype.deleteMarker = function( n )
{
    var marker = this.markers[n].marker;
    this.markers.splice( n, 1 );
    this.map.removeLayer( marker );
}

// GOOGLE MAP


function GoogleMarkerWrapper( label, lat, lng )
{
    this.marker = new google.maps.Marker( {
        map: map.map,
        position: new google.maps.LatLng( lat, lng ),
        draggable: true,
        title: label,
        clickable: true,
        animation: google.maps.Animation.DROP
    } );
    var me = this;
    this.marker.addListener( "click", function() {
        me.editMarker();
    } );
}

GoogleMarkerWrapper.prototype = Object.create(AbstractMarkerWrapper.prototype);
GoogleMarkerWrapper.prototype.constructor = GoogleMarkerWrapper;

GoogleMarkerWrapper.prototype.getLabel = function()
{
    return this.marker.getTitle();
}

GoogleMarkerWrapper.prototype.setLabel = function( label )
{
    this.marker.setTitle( label );
};

GoogleMarkerWrapper.prototype.getPosition = function()
{
    var c = this.marker.getPosition();
    return { lat: c.lat(), lng: c.lng() };            
};



function GoogleMapWrapper()
{

}
GoogleMapWrapper.prototype = Object.create(AbstractWrapper.prototype);
GoogleMapWrapper.prototype.constructor = GoogleMapWrapper;

GoogleMapWrapper.prototype.initialise = function( lat, lng, zoom, label, mlat, mlng,mapType )
{
    AbstractWrapper.prototype.initialise.call( this );
    
    var div = document.getElementById( "googleMap_mapDiv" );
    div.style.height = window.innerHeight + "px";
    
    var mapTypeId = google.maps.MapTypeId.ROADMAP;
    if (mapType == 2) {
      mapTypeId = google.maps.MapTypeId.SATELLITE;
    } else if (mapType == 3) {
      mapTypeId = google.maps.MapTypeId.HYBRID;
    }
    
    lnglat = new google.maps.LatLng( lat, lng );

    var mapOptions = {
        center: lnglat,
        zoom: zoom,
        mapTypeId: mapTypeId,
        scrollwheel: false
    };
    
    this.map = new google.maps.Map(document.getElementById("googleMap_mapDiv"), mapOptions);

    if (label != null) {
        this.createMarker( label, mlat, mlng );
    }

    this.geocoder = new google.maps.Geocoder();
};

GoogleMapWrapper.prototype.getCenter = function()
{
    var c = this.map.getCenter();
    return { lat: c.lat(), lng: c.lng() };
};

GoogleMapWrapper.prototype.setCenter = function( pos )
{
    this.map.setCenter( new google.maps.LatLng(pos.lat, pos.lng) );
};

GoogleMapWrapper.prototype.getZoom = function()
{
    return this.map.getZoom();
};

GoogleMapWrapper.prototype.getMapType = function() {
    if (this.map.mapTypeId == google.maps.MapTypeId.SATELLITE) {
        return 2;
    } else if (this.map.mapTypeId == google.maps.MapTypeId.HYBRID) {
        return 3;
    }
    return 1;
};

GoogleMapWrapper.prototype.createMarker = function( label, lat, lng )
{
    this.markers[ this.markers.length ] = new GoogleMarkerWrapper( label, lat, lng );
};

GoogleMapWrapper.prototype.deleteMarker = function( n )
{
    var marker = this.markers[n].marker;
    this.markers.splice( n, 1 );
    marker.setMap(null);
}

GoogleMapWrapper.prototype.search = function( address )
{
    if ((address == null) || (address == "") ) {
        return;
    }
  
    var request = { address: address, location: this.map.getCenter(), region: "uk" };
  
    var me = this;
    this.geocoder.geocode( request, function ( results, status ) {
    
        if ( status == google.maps.GeocoderStatus.OK ) {
            result = results[0];    
            me.map.setCenter( result.geometry.location );    
            me.map.fitBounds( result.geometry.viewport );  
        } else {
            alert( "Location : " + address + " not found." );
        }
    });    
};

GoogleMapWrapper.prototype.advancedSearch = function()
{
    var request = { address: document.getElementById("address").value, location: this.map.getCenter(), region: "uk" };
    
    var me = this;
    this.geocoder.geocode( request, function ( results, status ) {

        me.searchResults = results;
        var html = '<ul>';
        for ( var i = 0; i < results.length; i ++ ) {
            html += '<li><a href="#" onclick="return map.selectedSearch(' + i + ');">' + results[i].formatted_address + '</a></li>';
              
        }
        html += '</ul>';

        showSearchResults( html );
        showHamburger( false );
    });
    
    return false;
};

GoogleMapWrapper.prototype.selectedSearch = function( index )
{
    var result = this.searchResults[index];
    this.map.setCenter( result.geometry.location );    

    this.map.fitBounds( result.geometry.viewport );
    
    return false;
};


