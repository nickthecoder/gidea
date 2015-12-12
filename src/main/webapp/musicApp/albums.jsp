<%@ page contentType="text/html; charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>

<tiles:insert template="musicTemplate.jsp">

  <tiles:put name="title" type="string" value="Music : ${WEB_FILE.name}" />

  <tiles:put name="music" type="string" >

    <div class="tools">
        <ww:local var="isLocal"/>
        <c:if test="${isLocal}">
          <a id="nautilus" title="Open Nautilus ( o )" href="music:nautilus ${WEB_FILE.encodedFile}"><img alt="" src="<ww:contextPath/>/templates/ntc/files.png" /></a>
        </c:if>

        &nbsp;

        <ww:link title="Artists, No Albums" href="/music${WEB_FILE.encodedPath}"><img alt="" src="<ww:contextPath/>/templates/ntc/summary.png" /></ww:link>
    </div>

    <h1>Artists</h1>

    <!-- letters A..Z -->
    <div class="wiki_chooseLetter">
      <ul class="wiki_infoList">
      <ww:groupByInitial var="letters" items="${WEB_FILE.subDirectories}" expression="name">

        <c:forEach var="letter" items="${letters}">
          <li>
          <c:choose>
            <c:when test="${letter.count == 0}">
              <c:out value="${letter}"/>
            </c:when>
            <c:otherwise>
              <a id="group_letter_<c:out value="${letter}"/>" href="#group_${letter}"><c:out value="${letter}"/></a>
            </c:otherwise>
          </c:choose>
          </li>
        </c:forEach>

      </ww:groupByInitial>
      </ul>
    </div>
    <!-- end letters A-Z -->


    <ww:groupByInitial var="letters" items="${WEB_FILE.subDirectories}" expression="name">
      <c:forEach var="letter" items="${letters}">

        <c:if test="${letter.count > 0}">
        
          <h2 id="group_${letter}"><c:out value="${letter}"/></h2>
          <div class="wiki_editSection wiki_editSection2">
             <a href="#">top</a>
          </div>

          <c:forEach var="artist" items="${letter.items}">
          <div class="artist">
              <h3><ww:link href="/music${artist.path}"><c:out value="${artist.name}" default="" /></ww:link></h3>

              <div class="thumbnails">
              <c:forEach var="album" items="${artist.children}">
                <div class="thumbnailBox">
                  <div class="thumbnailContainer"><div class="thumbnailWrapper">
                    <ww:link title="Click to Play" href="/playMusic${album.path}"><img
                      alt="cover" src="${album.url}/.meta/cover_100.jpg"
                    /></ww:link><br/>
                  </div></div>
                  <div class="thumbnailLabel">
                    <ww:link title="View Album" href="/music${album.path}"><c:out value="${album.name}"/></ww:link>
                  </div>
                </div>
              </c:forEach>
              </div>
              
          </div>
          </c:forEach>

        </c:if>
      </c:forEach>
    </ww:groupByInitial>

    <script type="text/javascript">
    <!-- /* accunote shortcuts for each letter group */
    <ww:groupByInitial var="letters" items="${WEB_FILE.subDirectories}" expression="name">
      <c:forEach var="letter" items="${letters}">
          shortcuts.add( ["j", "${letter}".toLowerCase()], function() { followLink( "group_letter_${letter}"); } );
      </c:forEach>
    </ww:groupByInitial>
    -->
    </script>

  </tiles:put>
</tiles:insert>


