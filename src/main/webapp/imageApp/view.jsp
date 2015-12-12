<%@ page contentType="text/html; charset=utf-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="/templates/ntc/layout.jsp">

  <tiles:put name="title" type="string" value="Photos : ${WEB_FILE.name}" />
  
  <tiles:put name="extraHead" type="string">
      <ww:styleSheet href="/templates/ntc/gidea.css" />
  </tiles:put>
    
  <tiles:put name="content" type="string" >

    <div class="tools">
    
        <ww:local var="isLocal"/>
        <c:if test="${isLocal}">

          <ww:linkInfo href="/setDefaultImage"><ww:linkParameter name="path" value="${WEB_FILE.path}"/><ww:link title="Set as Default" ><img alt="!" src="<ww:contextPath/>/templates/ntc/important.png" /></ww:link></ww:linkInfo>

          &nbsp; &nbsp;
    
          <a id="nautilus" title="Open Nautilus ( o )" href="music:nautilus /gidea/images${WEB_FILE.encodedPath}"><img alt="O" src="<ww:contextPath/>/templates/ntc/files.png" /></a>

          &nbsp;

        </c:if>
        
        <c:if test="${!empty WEB_FILE.previousSibling}">
        <ww:linkInfo href="/images${WEB_FILE.previousSibling.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="previousLink" title="Previous Image ( , )"><img alt="&lt;" src="<ww:contextPath/>/templates/ntc/left.png" /></ww:link>
        </ww:linkInfo>
        </c:if>
        
        <c:if test="${!empty WEB_FILE.parent}">
        <ww:linkInfo href="/images${WEB_FILE.parent.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="upLink" title="Parent Folder ( u )"><img alt="^" src="<ww:contextPath/>/templates/ntc/up.png" /></ww:link>
        </ww:linkInfo>
        </c:if>

        <c:if test="${!empty WEB_FILE.nextSibling}">
        <ww:linkInfo href="/images${WEB_FILE.nextSibling.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="nextLink" title="Next Image ( , )"><img alt="&gt;" src="<ww:contextPath/>/templates/ntc/right.png" /></ww:link>
        </ww:linkInfo>
        </c:if>
        
    </div>
    
    <script><!--
        shortcuts.add( [","], function() { followLink( "previousLink" ); } );
        shortcuts.add( ["."], function() { followLink( "nextLink" ); } );
        shortcuts.add( ["u"], function() { followLink( "upLink" ); } );
    --></script>
    
    <h1><app:webPath path="${WEB_FILE.path}" action="/images" size="full"/></h1>

    <div class="viewImage">
    
        <c:choose>
          <c:when test="${WEB_FILE.svg}">

            <object type="image/svg+xml" name="svgimage" data="${WEB_FILE.url}" width="400" height="500"></object>
  
          </c:when>
          <c:otherwise>
  
            <a id="photoLink" href="<ww:contextPath/>/images${WEB_FILE.nextSibling.encodedPath}"><img alt="photo" id="photo" src="${WEB_FILE.url}"/></a>

          </c:otherwise>
        </c:choose>
    
    </div>
      
 
  </tiles:put>

</tiles:insert>

