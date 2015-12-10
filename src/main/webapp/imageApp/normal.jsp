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
            
        <div class="imageContainer">
            <ww:link><img alt="image" src="http://nickthecoder.co.uk/${leaf.quickImage.resourceLocation}" /></ww:link>
            <br/>
                    
            <ww:link><c:out value="${leaf.name}" /></ww:link>
        </div>

      </ww:linkInfo>
  
    </c:forEach>

  </div>

  <!-- {{{ Pager links -->
  <c:if test="${! pager.singlePage}">
    <div class="pager">
      Page :
      <ww:linkInfo href="/images${WEB_FILE.encodedPath}">
        <ww:pagerLinks type="previous"><ww:link title="Previous Page ( [ )" id="previousPage">&#11013;</ww:link></ww:pagerLinks>
        <ww:pagerLinks type="before"><ww:link>${page}</ww:link> </ww:pagerLinks>
        <ww:pagerLinks type="current"><span class="pagerCurrent">${page}</span></ww:pagerLinks>
        <ww:pagerLinks type="after"><ww:link>${page}</ww:link></ww:pagerLinks>
        <ww:pagerLinks type="next"><ww:link title="Next Page ( ] )" id="nextPage">&#10145;</ww:link></ww:pagerLinks>
      </ww:linkInfo>
    </div>
  </c:if>
  <script><!--
    shortcuts.add( ["["], function() { followLink( "previousPage" ); } );
    shortcuts.add( ["]"], function() { followLink( "nextPage" ); } );
  --></script>
  <!-- }}} end pager links -->
    
  </tiles:put>

</tiles:insert>
</ww:pager>

