<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Music Catalogue" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/musicApp/breadcrumbs.jsp" />
  </tiles:put>
  <tiles:put name="tab" value="music" />

  <tiles:put name="main" type="string" >

    <h1>Catalogue</h1>

    <!-- wiki -->
    <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
      <tiles:put name="wikiNamespace" value="music"/>
      <tiles:put name="wikiTitle" value="${WEB_FILE.hierarchy.root.path}"/>
    </tiles:insert>

    <!-- {{{ music category -->
    <div class="hMenu tertiaryNavigation">
      <ul>
        <c:forEach var="category" items="${WEB_FILE.hierarchy.root.subDirectories}" >
          <a class="button" href="#${category.name}"><c:out value="${category.name}"/></a>
        </c:forEach>
      </ul>
    </div>
    <!-- end music category }}} -->

    <c:forEach var="category" items="${WEB_FILE.hierarchy.root.subDirectories}">

      <a name="<c:out value="${category.name}"/>"></a>
      <h2><c:out value="${category.name}"/></h2>
      <div class="heading2Tools hMenu2">
        <ul>
          <li><a href="#top">top</a></li>
        </ul>
      </div>

      <ww:edges className="whiteBox">

        <c:forEach var="artist" items="${category.subDirectories}">

            <h3><c:out value="${artist.name}" default="" /></h3>

            <table width="100%">
              <ww:portion var="rows" items="${artist.subDirectories}" portionSize="4" transpose="true" >
                <c:forEach var="row" items="${rows}" varStatus="lineInfo">
                  <tr>
                    <c:forEach var="album" items="${row}">
                      <td width="25%" align="center">
                        <c:if test="${album != null}" >

                          <!-- cover -->
                          <img alt="cover" src="<app:webImage directory="${album}" file=".meta/cover_100.jpg" notFoundPath="/musicApp/noImage100x100.png" />" />
                          <br/>

                          <!-- album name -->
                          <c:out value="${album.name}" default="" />

                        </c:if>
                      </td>
                    </c:forEach>
                  </tr>
                </c:forEach>
              </ww:portion>
            </table>


        <!-- end artist -->
        </c:forEach>

      </ww:edges>

    <!-- end category -->
    </c:forEach>



  </tiles:put>
</tiles:insert>

