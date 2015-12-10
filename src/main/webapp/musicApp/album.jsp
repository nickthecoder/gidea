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
        <ww:linkParameter name="path" value="${WEB_FILE.parent.path}"/>
        <ww:link><c:out value="${WEB_FILE.parent.name}"/></ww:link>
      </ww:linkInfo>
    </h1>
    <h2>
      <ww:linkInfo href="/showMusic.do">
        <ww:linkParameter name="path" value="${WEB_FILE.path}"/>
        <ww:link><c:out value="${WEB_FILE.name}"/></ww:link>
      </ww:linkInfo>
    </h2>
    <div class="headingTools2">
      <div class="hMenu2">
        <ul>
          <li><a href="music:nautilus /gidea/music/categories/<c:out value="${WEB_FILE.path}"/>">nautilus</a></li>
          <li><a href="music:burn /gidea/music/categories/<c:out value="${WEB_FILE.path}"/>">burn</a></li>

          <li><ww:linkInfo href="/showAlbumCover.do">
            <ww:linkParameter name="path" value="${WEB_FILE.path}"/>
            <ww:link>cover</ww:link>
          </ww:linkInfo></li>
        </ul>
      </div>
    </div>

    <c:set var="directory" value="${WEB_FILE}"/>

    <ww:edges className="whiteBox">

      <div class="gidea_cover">
        <ww:linkInfo href="/playMusic.do">
          <ww:linkParameter name="path" value="${directory.path}"/>
          <ww:link title="Play"><img
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

      </div>

      <div style="clear: both"></div>

    </ww:edges>

    <!-- wiki -->
    <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
      <tiles:put name="wikiName" value="music:${WEB_FILE.path}"/>
    </tiles:insert>


    <c:if test="${directory.backupHistory != null}">
      <br/>
      Backup History :
      <ul>
        <c:forEach var="item" items="${directory.backupHistory}">
          <li><c:out value="${item}"/></li>
        </c:forEach>
      </ul>
    </c:if>

  </tiles:put>
</tiles:insert>

