<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Music : ${WEB_FILE.name}" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/musicApp/breadcrumbs.jsp" />
  </tiles:put>
  <tiles:put name="tab" value="music" />

  <tiles:put name="main" type="string" >

    <h1>Albums</h1>

    <ww:groupByInitial var="letters" items="${WEB_FILE.subDirectories}" expression="name">


      <!-- {{{ music category -->
      <div class="hMenu tertiaryNavigation">
        <ul>
          <c:forEach var="category" items="${WEB_FILE.hierarchy.root.subDirectories}" >
            <c:choose>
              <c:when test="${category == WEB_FILE}">
                <li class="on"><ww:link href="/showMusic.do?path=${category.path}"><c:out value="${category.name}"/></ww:link></li>
              </c:when>
              <c:otherwise>
                <li><ww:link href="/showMusic.do?path=${category.path}"><c:out value="${category.name}"/></ww:link></li>
              </c:otherwise>
            </c:choose>
          </c:forEach>
        </ul>
      </div>
      <!-- end music category }}} -->


      <!-- {{{ letters A..Z -->
      <div class="chooseLetter">
        <ww:groupByInitial var="letters" items="${WEB_FILE.subDirectories}" expression="name">

          <c:forEach var="letter" items="${letters}">
            <c:choose>
              <c:when test="${letter.count == 0}">
                <c:out value="${letter}"/>
              </c:when>
              <c:otherwise>
                <a href="#artist_letter_${letter}"><c:out value="${letter}"/></a>
              </c:otherwise>
            </c:choose>
          </c:forEach>

        </ww:groupByInitial>
      </div>
      <!-- end letters A-Z }}} -->


      <!-- {{{ wiki -->
      <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
        <tiles:put name="wikiNamespace" value="music"/>
        <tiles:put name="wikiTitle" value="${WEB_FILE.path}"/>
      </tiles:insert>
      <!-- end wiki }}} -->


      <!-- {{{ albums - List all artists, grouped by Letter -->
      <c:forEach items="${letters}" var="letter">

        <c:if test="${letter.count > 0}">

            <a name="artist_letter_<c:out value="${letter}"/>"></a>
            <h2>( <c:out value="${letter}"/> )</h2>
            <div class="heading2Tools hMenu2">
              <ul>
                <li><a href="#top">top</a></li>
              </ul>
            </div>

          <ww:edges className="whiteBox">

            <c:forEach var="artist" items="${letter.items}">

              <div class="contrast">

                <h3>
                  <ww:linkInfo href="/showMusic.do">
                    <ww:linkParameter name="path" value="${artist.path}"/>
                    <ww:link><c:out value="${artist.name}" /></ww:link>
                  </ww:linkInfo>
                </h3>

                <table class="thumbnails" width="100%">
                  <ww:portion var="rows" items="${artist.subDirectories}" portionSize="4" >
                    <c:forEach var="row" items="${rows}" varStatus="lineInfo">
                      <tr>
                        <c:forEach var="album" items="${row}">
                          <td style="width: 25%; text-align: center">
                            <c:if test="${album != null}" >

                              <!-- cover -->
                              <ww:linkInfo href="/playMusic.do">
                                <ww:linkParameter name="path" value="${album.path}"/>
                                <ww:link title="Play"><img
                                  alt="cover"
                                  src="<app:webImage directory="${album}" file=".meta/cover_100.jpg" notFoundPath="/musicApp/noImage100x100.png" />"
                                /></ww:link>
                              </ww:linkInfo>

                            </c:if>
                          </td>
                        </c:forEach>
                      </tr>

                      <tr>
                        <c:forEach var="album" items="${row}">
                          <td style="width:25%; text-align: center; vertical-align: top;">
                            <c:if test="${album != null}" >
                                                      
                              <!-- album name -->
                              <ww:linkInfo href="/showMusic.do">
                                <ww:linkParameter name="path" value="${album.path}"/>
                                <ww:link><c:out value="${album.name}" /></ww:link>
                              </ww:linkInfo>

                            </c:if>
                          </td>
                        </c:forEach>
                      </tr>
                    </c:forEach>
                  </ww:portion>
                </table>

                <!-- wiki -->
                <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
                  <tiles:put name="wikiNamespace" value="music"/>
                  <tiles:put name="wikiTitle" value="${artist.path}"/>
                </tiles:insert>

              </div>

              <br/>

            </c:forEach>

          </ww:edges>

        </c:if>

      </c:forEach>
      <!-- end albums }}} -->

      <!-- {{{ wiki -->
      <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
        <tiles:put name="wikiName" value="music:${WEB_FILE.hierarchy.root.path}"/>
      </tiles:insert>
      <!-- end wiki }}} -->

    </ww:groupByInitial>

  </tiles:put>

</tiles:insert>

