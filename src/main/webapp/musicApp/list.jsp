<%@ page contentType="text/html; charset=UTF-8" %>

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

    <h1>Artists</h1>

    <!-- {{{ music category -->
    <div class="hMenu tertiaryNavigation">
      <ul>
        <c:forEach var="category" items="${WEB_FILE.hierarchy.root.subDirectories}" >
          <c:choose>
            <c:when test="${category == WEB_FILE}">
              <li class="on"><ww:link href="/listMusic.do?path=${category.path}"><c:out value="${category.name}"/></ww:link></li>
            </c:when>
            <c:otherwise>
              <li><ww:link href="/listMusic.do?path=${category.path}"><c:out value="${category.name}"/></ww:link></li>
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


    <ww:groupByInitial var="letters" items="${WEB_FILE.subDirectories}" expression="name">
      <c:forEach var="letter" items="${letters}">

        <c:if test="${letter.count > 0}">
        <ww:edges className="whiteBox">
        
          <h2><a href="#artist_letter_${letter}" id="artist_letter_${letter}"><c:out value="${letter}"/></a></h2>
          <div class="heading2Tools hMenu2">
            <ul>
              <li><a href="#">top</a></li>
            </ul>
          </div>


          <c:forEach var="directory" items="${letter.items}" varStatus="status">
            <span style="white-space: nowrap;">

              <ww:linkInfo href="/showMusic.do">
                <ww:linkParameter name="path" value="${directory.path}"/>
                <ww:link><c:out value="${directory.name}" default="" /></ww:link>
              </ww:linkInfo>
              <c:if test="${! status.last}"> &nbsp;-&nbsp; </c:if>
            </span>
          </c:forEach>


        </ww:edges>
        </c:if>
      </c:forEach>
    </ww:groupByInitial>

    <script type="text/javascript">
    <!-- /* accunote shortcuts for each letter group */
    <ww:groupByInitial var="letters" items="${WEB_FILE.subDirectories}" expression="name">
      <c:forEach var="letter" items="${letters}">
          shortcutListener.add( ["l", "${letter}"], function() { ww_followLink( "artist_letter_${letter}"); } );
      </c:forEach>
    </ww:groupByInitial>
    -->
    </script>

    <br/><br/>

    <hr/>

    <br/>

    <!-- wiki snip -->
    <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
      <tiles:put name="wikiNamespace" value="music"/>
      <tiles:put name="wikiTitle" value="${WEB_FILE.hierarchy.root.path}"/>
    </tiles:insert>


  </tiles:put>
</tiles:insert>


