<%@ page contentType="text/html; charset=utf-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="/templates/ntc/layout.jsp">

  <tiles:put name="title" type="string" value="Photos : ${WEB_FILE.name}" />
  
  <tiles:put name="extraHead" value="/imageApp/extraHead.jsp" />
  
  <tiles:put name="content" type="string" >

    <!-- imageApp/webFriendly.jsp -->
    
    <div class="tools">
    
        <ww:linkInfo href="/setDefaultImage"><ww:linkParameter name="path" value="${WEB_FILE.path}"/><ww:link title="Set as Default" ><img alt="&lt;" src="<ww:contextPath/>/imageApp/important.png" /></ww:link></ww:linkInfo>

        &nbsp; &nbsp;
    
        <ww:local var="isLocal"/>
        <c:if test="${isLocal}">
          <a id="nautilus" title="Open Nautilus ( o )" href="music:nautilus /gidea/images${WEB_FILE.encodedPath}"><img alt="&lt;" src="<ww:contextPath/>/imageApp/files.png" /></a>
        </c:if>

        &nbsp;
        
        <c:if test="${!empty WEB_FILE.previousSibling}">
        <ww:linkInfo href="/images${WEB_FILE.previousSibling.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="previousLink" title="Previous Image ( , )"><img alt="&lt;" src="<ww:contextPath/>/imageApp/left.png" /></ww:link>
        </ww:linkInfo>
        </c:if>
        
        <c:if test="${!empty WEB_FILE.parent}">
        <ww:linkInfo href="/images${WEB_FILE.parent.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="upLink" title="Parent Folder ( u )"><img alt="^" src="<ww:contextPath/>/imageApp/up.png" /></ww:link>
        </ww:linkInfo>
        </c:if>

        <c:if test="${!empty WEB_FILE.nextSibling}">
        <ww:linkInfo href="/images${WEB_FILE.nextSibling.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="nextLink" title="Next Image ( , )"><img alt="&lt;" src="<ww:contextPath/>/imageApp/right.png" /></ww:link>
        </ww:linkInfo>
        </c:if>

        &nbsp;
        
    </div>
    
    <script><!--
        shortcuts.add( [","], function() { followLink( "previousLink" ); } );
        shortcuts.add( ["."], function() { followLink( "nextLink" ); } );
        shortcuts.add( ["u"], function() { followLink( "upLink" ); } );
    --></script>
    
    <h1><app:webPath path="${WEB_FILE.path}" action="/images" size="full"/></h1>

    <div class="images">
    
        <c:choose>
          <c:when test="${WEB_FILE.svg}">

            <object type="image/svg+xml" name="svgimage" data="<c:out value="${WEB_FILE.resourceLocation}"/>" width="400" height="500"></object>
  
          </c:when>
          <c:otherwise>
  
            <a id="photoLink" href="<ww:contextPath/>/image${WEB_FILE.nextSibling.encodedPath}"><img alt="photo" id="photo" src="<c:out value="http://nickthecoder.co.uk/${WEB_FILE.resourceLocation}"/>"/></a>

          </c:otherwise>
        </c:choose>
    
    </div>
      

    <!-- {{{ wiki -->
    <div class="apart">
      <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
        <tiles:put name="wikiNamespace" value="image"/>
        <tiles:put name="wikiTitle" value="${WEB_FILE.path}"/>
    </tiles:insert>
    </div>
    <!-- }}} -->
      
 
  </tiles:put>

</tiles:insert>

