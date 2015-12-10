<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="${WEB_FILE.name}" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/musicApp/breadcrumbs.jsp" />
  </tiles:put>
  <tiles:put name="tab" value="music" />
  

  <tiles:put name="main" type="string" >

    <h1>
      <ww:linkInfo href="/showMusic.do">
        <ww:linkParameter name="path" value="${WEB_FILE.path}"/>
        <ww:link><c:out value="${WEB_FILE.name}"/></ww:link>
      </ww:linkInfo>
    </h1>

    <!-- Sub-Directories -->
    <c:forEach var="directory" items="${WEB_FILE.subDirectories}">

      <h2>
        <ww:linkInfo href="/showMusic.do">
          <ww:linkParameter name="path" value="${directory.path}"/>
          <ww:link><c:out value="${directory.name}"/></ww:link>
        </ww:linkInfo>
      </h2>
      <div class="headingTools2">
        <div class="hMenu2">
          <ul>
            <li><a href="music:nautilus /gidea/music/categories/<c:out value="${directory.path}"/>">nautilus</a></li>
            <li><a href="music:burn /gidea/music/categories/<c:out value="${directory.path}"/>">burn</a></li>
            <li><ww:linkInfo href="/showAlbumCover.do">
              <ww:linkParameter name="path" value="${directory.path}"/>
              <ww:link>cover</ww:link>
            </ww:linkInfo></li>
          </ul>
        </div>
      </div>

      <ww:edges className="whiteBox">

        <!-- Cover -->
        <div class="gidea_cover">
          <ww:linkInfo href="/playMusic.do">
            <ww:linkParameter name="path" value="${directory.path}"/>
            <ww:link title="cover" ><img
              alt="cover"
              src='<app:webImage directory="${directory}" file=".meta/cover_400.jpg" notFoundPath="/musicApp/noImage400x400.png" />'
            /></ww:link>
          </ww:linkInfo>
        </div>

        <!-- Track Listing -->
        <div class="gidea_trackListing">
          <ol>
            <c:forEach var="track" items="${directory.leaves}" >
              <li>
                <a title="Queue Track" href="music:queue /gidea/music/categories/<c:out value="${track.path}"/>"><app:formattedName name="${track.strippedName}" /></a>
              </li>
            </c:forEach>
          </ol>

          <br/>

          <div style="text-align: center;">
            [ <a href="music:prev">prev</a> ] &nbsp;
            [ <a href="music:pause">pause</a> ] &nbsp;
            [ <a href="music:unpause">play</a> ] &nbsp;
            [ <a href="music:next">next</a> ] &nbsp;
          </div>

        </div>

        <div style="clear: both"></div>

        
        <!-- wiki -->
        <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
          <tiles:put name="wikiNamespace" value="music"/>
          <tiles:put name="wikiTitle" value="${directory.path}"/>
          <tiles:put name="hide" value="true"/>
        </tiles:insert>
  

      </ww:edges>

    </c:forEach>

    <!-- wiki -->
    <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
      <tiles:put name="wikiNamespace" value="music"/>
      <tiles:put name="wikiTitle" value="${WEB_FILE.path}"/>
      <tiles:put name="hide" value="false"/>
    </tiles:insert>

  </tiles:put>

</tiles:insert>

