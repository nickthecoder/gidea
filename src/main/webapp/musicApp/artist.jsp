<%@ page contentType="text/html; charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="g" %>

<tiles:insert template="musicTemplate.jsp">

  <tiles:put name="title" type="string" value="${WEB_FILE.name}" />

  <tiles:put name="music" type="string" >

    <div class="tools">
        <ww:local var="isLocal"/>
        <c:if test="${isLocal}">
          <a id="nautilus" title="Open Nautilus ( o )" href="music:nautilus ${WEB_FILE.encodedFile}"><img alt="O" src="<ww:contextPath/>/templates/ntc/files.png" /></a>
        </c:if>
    </div>
    
    <h1><c:out value="${WEB_FILE.name}"/></h1>

    <!-- Sub-Directories -->
    <c:forEach var="album" items="${WEB_FILE.subDirectories}">

      <h2><ww:link href="/music${album.path}"><c:out value="${album.name}"/></ww:link></h2>

      <!-- Cover -->
      <div class="albumCover">
        <ww:link title="Click to Play" href="/playMusic${album.path}"><img
            alt="cover" src="${album.url}/.meta/cover_400.jpg"
        /></ww:link>
      </div>

      <!-- Track Listing -->
      <div class="trackListing">
          <ol>
              <c:forEach var="track" items="${album.leaves}" >
              <li>
                    <a title="Queue Track" href="music:queue /gidea/music/categories<c:out value="${track.path}"/>"><g:formattedName name="${track.baseName}" /></a>
              </li>
              </c:forEach>
          </ol>
    
      </div>

    </c:forEach>

  </tiles:put>

</tiles:insert>

