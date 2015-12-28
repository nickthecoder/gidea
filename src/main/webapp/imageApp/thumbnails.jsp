<%@ page contentType="text/html; charset=utf-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="imageTemplate.jsp">

  <tiles:put name="images" type="string">
  <div class="thumbnails">

    <c:forEach var="leaf" items="${WEB_FILE.leaves}">
      <ww:linkInfo href="/images${leaf.encodedPath}">

        <div class="thumbnailBox">
          <div class="thumbnailContainer"><div class="thumbnailWrapper">
            <c:if test="${leaf.thumbnailComplete}">
            </c:if>
            <ww:link><img class="thumbnail" alt="" src="${leaf.thumbnail.url}"/></ww:link>
          </div></div>
          <div class="thumbnailLabel">
            <ww:link><c:out value="${leaf.name}" /></ww:link>
          </div>
        </div>
      </ww:linkInfo>
  
    </c:forEach>

  </div>
  </tiles:put>
    
</tiles:insert>

