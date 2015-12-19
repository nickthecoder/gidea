<%@ page contentType="text/html; charset=utf-8" %>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>

<head>
  <title>Map</title>

  <link rel="icon" href="/resources/mapIcon.png" />
  <link rel="stylesheet" href="maps.css" />
  <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
  <script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>
  <script type="text/javascript" src="maps.js"></script>

</head>

<body onload="leaflet_load();">
  <form action="map.jsp" id="searchForm">
    <div id="tools">
      <a id="streetStyle" href="#" onmouseover="changeLink('streetStyle','osmap.jsp',1)" onclick="followLink('osmap.jsp',1); return false;">Map</a>
      <a id="satelliteStyle" href="#" onmouseover="changeLink('satelliteStyle','osmap.jsp',3)" onclick="followLink('osmap.jsp',3); return false;">Satellite</a>
      <input class="searchBox" id="address" name="address" type="text"placeholder="search" size="30" value="<c:out value="${param.address}"/>"/>
      <input class="searchButton" type="submit" value="&#10140;" />
      <a id="hamburger" href="#" onclick="hamburger(); return false;">&#8801;</a>
    </div>
  </form>

  <div id="menu" class="popup">
    <ul>
      <li><a href="#" title="Copy the Web Address for this Map" onclick="copyLink('osmap.jsp'); return false;">Copy Web Address</a></li>
    </ul>
    <hr/>
    <ul>
      <li><a id="googleData" href="#" title="Switch to Google Map Data" onmouseover="changeLink('googleData','map.jsp')" onclick="followLink('map.jsp'); return false;">Google View</a></li>
      <li><a id="googleMapLink" title="Use Google Maps" href="#" onmouseover="createGoogleMapLink()" onclick="googleMapLink(); return false;">Google Maps</a></li>
      <li><a id="openStreetMapLink" title="Use OpenStreetMap.org" href="#" onmouseover="createOpenStreetMapLink()" onclick="openStreetMapLink(); return false;">Open Street Map</a></li>
    </ul>
    <hr/>
    <h3>Markers<a href="#" class="right" title="Add a Marker" onclick="addMarker(); return false;">+</a></h3>
    <ul id="markers">
    </ul>
  </div>

  <div id="map"></div>

</body>

</html>



