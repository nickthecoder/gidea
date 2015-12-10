<!DOCTYPE html>
<html lang="en-GB">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>

<% request.setAttribute( "server", request.getServerName() ); %>
<tiles:useAttribute name="navigation" ignore="true"/>

<head>
  <title>
	<tiles:insert attribute="title"/>
  </title>
  <ww:styleSheet href="/templates/ntc/style.css"/>
  <link rel="icon" href="<ww:contextPath/>/templates/icon.png"/>
  <link href='http://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type='text/css' />

  <ww:script src="/templates/ntc/acunote-shortcuts.js"></ww:script>
  <ww:script src="/templates/ntc/shortcuts.js"></ww:script>
  
  <tiles:insert attribute="extraHead" ignore="true"/>  
</head>

<body>
  <div id="whole">
    <div id="header">
      <div id="logo">
      	<c:choose>
          <c:when test="${server == 'nickthecoder.co.uk'}">
	    <h1><a id="logo" href="/">Nick The Coder . co . uk</a></h1>
	  </c:when>
	  <c:otherwise>
	    <h1><a id="logo" href="/">Giddyserv</a></h1>
	  </c:otherwise>
	</c:choose>
      </div>
      
      <div id="shortcut_status"></div>

      <form id="search" method="get" action="/ichneutae/search">
        <input id="searchText" type="text" size="15" name="q" placeholder="search"/>
        <input id="searchSubmit" type="submit" value="&#10140;"/>
      </form>

      <ww:tabs id="tabs">
        <ww:tab useContextPath="false" pattern="/index.jsp"><a id="wikiLink" href="/wiki/view/Home">Wiki</a></ww:tab>
        <ww:tab useContextPath="false" pattern="/gidea/music/.*"><a id="musicLink" href="/gidea/music/">Music</a></ww:tab>
        <ww:tab useContextPath="false" pattern="/image.*"><a id="photosLink" href="/gidea/images/">Photos</a></ww:tab>
        <ww:tab useContextPath="false" pattern="/familyalbum/.*"><a id="familyAlbumLink" href="/familyAlbum/">Family Album</a></ww:tab>
        <ww:tab useContextPath="false" pattern="/software/.*"><a id="softwareLink" href="/software/view">Software</a></ww:tab>
        <ww:tab useContextPath="false" pattern="/recipes/.*"><a id="recipesLink" href="/recipes/view">Recipes</a></ww:tab>
        <ww:tab useContextPath="false" pattern="/garden/.*"><a id="gardenLink" href="/garden/view">Garden</a></ww:tab>
       </ww:tabs>

    </div>

    <div id="belowTabs">
    </div>
    
    <div id="main">
	  <c:if test="${navigation==null}">
      <div id="full">
	  </c:if>
	  <c:if test="${navigation!=null}">
      <div id="columns">
	  </c:if>

        <div id="content">  	  


          <tiles:insert attribute="content" ignore="true"/>
        </div>

        <div id="navigation">
          <tiles:insert attribute="navigation" ignore="true"/>
        </div>
        
      </div>

      <div id="belowColumns">
      </div>

    </div>

    <div id="footer">        
      &copy; <a href="http://nickthecoder.co.uk">nickthecoder.co.uk</a>
    </div>
        
  </div>
  
</body>
</html>
