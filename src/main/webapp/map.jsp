<%@ page contentType="text/html; charset=utf-8" %>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>

<head>
  <title>Map</title>

  <link rel="stylesheet" href="maps.css" />
  <link rel="icon" href="/resources/mapIcon.png" />
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpZxghYNTdsc5KXL483zoCMIN9tRLzHWw&sensor=false"></script>
  <script type="text/javascript" src="maps.js"></script>
</head>

<body onload="googleMap_load(); map.search( '<c:out value="${param.address}"/>' );">
  <form action="map.jsp" id="searchForm" onsubmit="map.search( this.address.value ); return false;">
    <div id="tools">
      <input class="searchBox" id="address" name="address" type="text"placeholder="search" size="30" value="<c:out value="${param.address}"/>"/>
      <input class="searchButton" type="submit" value="&#10140;" />
      <input class="advancedSearch" type="button" value="&#8230;" onclick="return map.advancedSearch();"/>
      <a id="hamburger" href="#" onclick="hamburger(); return false;">&#8801;</a>
    </div>
  </form>

  <div id="menu" class="popup">
    <ul>
      <li><a href="#" title="Copy the Web Address for this Map" onclick="copyLink('map.jsp'); return false;">Copy Web Address</a></li>
      <li><a id="osmData" href="#" title="Switch to Open Street Map's Data" onmouseover="changeLink('osmData','osmap.jsp')" onclick="followLink('osmap.jsp'); return false;">OSM's</a></li>
      <li><a id="googleMapLink" title="Use Google Maps" href="#" onmouseover="createGoogleMapLink()" onclick="googleMapLink(); return false;">Google Maps</a></li>
      <li><a id="openStreetMapLink" title="Use OpenStreetMap.org" href="#" onmouseover="createOpenStreetMapLink()" onclick="openStreetMapLink(); return false;">Open Street Map</a></li>
    </ul>
    <hr/>
    <h3>Markers<a href="#" class="right" title="Add a Marker" onclick="addMarker(); return false;">+</a></h3>
    <ul id="markers">
    </ul>
  </div>

  <div id="googleMap_mapDiv"></div>

  <div id="search" class="popup">
    <div class="background"></div>
    <div id="searchHeading">
        <a href="#" class="right" onclick="showSearchResults(null); return false;">X</a>
    </div>
    <div id="searchContent"></div>
  </div>

</body>

</html>





