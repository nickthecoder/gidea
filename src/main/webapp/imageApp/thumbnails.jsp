<%@ page contentType="text/html; charset=utf-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<ww:pager items="${WEB_FILE.leaves}" itemsPerPage="16" subsetVar="subset" pagerVar="pager">
<tiles:insert template="imageTemplate.jsp">

  <tiles:put name="images" type="string">
  <div class="images">

    <c:forEach var="leaf" items="${subset}">
      <ww:linkInfo href="/image${leaf.encodedPath}">
            
        <div class="thumbnailContainer"><div class="thumbnailWrapper"><div class="thumbnailExtra">
            <ww:link><img class="thumbnail" alt="" src="http://nickthecoder.co.uk/${leaf.thumbnail.resourceLocation}"/></ww:link>
            <br/>

            <ww:link><c:out value="${leaf.name}" /></ww:link>
        </div></div></div>

      </ww:linkInfo>
  
    </c:forEach>

  </div>
  </tiles:put>
    
</tiles:insert>
</ww:pager>

