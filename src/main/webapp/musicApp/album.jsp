<%@ page contentType="text/html; charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="g" %>

<tiles:insert template="musicTemplate.jsp">

  <tiles:put name="title" type="string" value="${WEB_FILE.parent.name} - ${WEB_FILE.name}" />

  <tiles:put name="music" type="string" >

    <div class="tools">
        <ww:local var="isLocal"/>
        <c:if test="${isLocal}">
          <a id="nautilus" title="Open Nautilus ( o )" href="music:nautilus ${WEB_FILE.encodedFile}"><img alt="O" src="<ww:contextPath/>/templates/ntc/files.png" /></a>
        </c:if>
    </div>
    
    <h1><ww:link href="/music${WEB_FILE.parent.encodedPath}"><c:out value="${WEB_FILE.parent.name}"/></ww:link></h1>

    <h2><c:out value="${WEB_FILE.name}"/></h2>

      <!-- Cover -->
      <div class="albumCover">
        <ww:link title="Click to Play" href="/playMusic${WEB_FILE.encodedPath}"><img
            alt="cover" src="${WEB_FILE.url}/.meta/cover_400.jpg"
        /></ww:link>
      </div>

      <!-- Track Listing -->
      <div class="trackListing">
          <ol>
              <c:forEach var="track" items="${WEB_FILE.leaves}" >
              <li>
                    <a title="Queue Track" href="music:queue /gidea/music/categories<c:out value="${track.encodedPath}"/>"><g:formattedName name="${track.baseName}" /></a>
              </li>
              </c:forEach>
          </ol>
    
      </div>

  </tiles:put>

</tiles:insert>

