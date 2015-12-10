<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>


<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Plain Music Catalogue" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/musicApp/breadcrumbs.jsp" />
  </tiles:put>
  <tiles:put name="tab" value="music" />


  <tiles:put name="main" type="string" >

    <h1>Plain Catalogue</h1>

    <!-- List of Music -->
    <c:forEach var="category" items="${WEB_FILE.hierarchy.root.subDirectories}">

      <!-- Category -->
      <a name="<c:out value="${category.name}"/>"></a>
      <h2><c:out value="${category.name}"/></h2>


      <ww:edges className="whiteBox">

        <c:forEach var="artist" items="${category.subDirectories}">

          <!-- Artist -->
          <h3><c:out value="${artist.name}" default="" /></h3>

            <ul>
            <c:forEach var="album" items="${artist.subDirectories}">
              <!-- album -->
              <li>
                <c:if test="${album.latestBackup == null}">
                  <span class="warning">(not backed up)</span>
                </c:if>
                <span class="trivial"><c:out value="${album.latestBackup}"/></span>
                <b><c:out value="${album.name}" default="" /></b>
              </li>

            </c:forEach>
            </ul>

          <br/>
        </c:forEach>

      </ww:edges>

    </c:forEach>

  </tiles:put>
</tiles:insert>

