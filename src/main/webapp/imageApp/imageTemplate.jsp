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

        <ww:local var="isLocal"/>
        <c:if test="${isLocal}">
          <a id="nautilus" title="Open Nautilus ( o )" href="music:nautilus /gidea/images${WEB_FILE.encodedPath}"><img alt="&lt;" src="<ww:contextPath/>/imageApp/files.png" /></a>
        </c:if>

        &nbsp;

        <c:if test="${!empty WEB_FILE.previousDirectory}">
        <ww:linkInfo href="/images${WEB_FILE.previousDirectory.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="previousLink" title="Previous Folder ( , )"><img alt="&lt;" src="<ww:contextPath/>/imageApp/left.png" /></ww:link>
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

        <c:if test="${!empty WEB_FILE.nextDirectory}">
        <ww:linkInfo href="/images${WEB_FILE.nextDirectory.path}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="nextLink" title="Next Folder ( , )"><img alt="&lt;" src="<ww:contextPath/>/imageApp/right.png" /></ww:link>
        </ww:linkInfo>
        </c:if>

        &nbsp;
                    
        <ww:link id="viewThumbnails" title="Thumbnails ( v t )" href="/images${WEB_FILE.path}?size=thumbnails"><img src="<ww:contextPath/>/imageApp/thumbnails.png"/></ww:link>
        <ww:link id="viewNormal" title="Normal Size ( v n )" href="/images${WEB_FILE.path}"><img src="<ww:contextPath/>/imageApp/normal.png"/></ww:link>
        <ww:link id="viewFullSize" title="Full Size ( v f )" href="/images${WEB_FILE.path}?size=full"><img src="<ww:contextPath/>/imageApp/full.png"/></ww:link>
    </div>
    
    <script><!--
        shortcuts.add( ["o"], function() { followLink( "nautilus" ); } );
        shortcuts.add( ["v", "t"], function() { followLink( "viewThumbnails" ); } );
        shortcuts.add( ["v", "n"], function() { followLink( "viewNormal" ); } );
        shortcuts.add( ["v", "f"], function() { followLink( "viewFullSize" ); } );
        shortcuts.add( [","], function() { followLink( "previousLink" ); } );
        shortcuts.add( ["."], function() { followLink( "nextLink" ); } );
        shortcuts.add( ["u"], function() { followLink( "upLink" ); } );
    --></script>

    <h1><app:webPath path="${WEB_FILE.path}" action="/images"/></h1>
      
      <!-- {{{ Sub-Directories -->

      <div class="thumbnails">

        <c:forEach var="directory" items="${WEB_FILE.subDirectories}">
            <div class="thumbnailContainer"><div class="thumbnailWrapper"><div class="thumbnailExtra">
              <ww:linkInfo href="/images${directory.encodedPath}">
                <ww:link>
                  <c:choose>
                    <c:when test="${directory.dirThumbnail == null}">
                      <img class="thumbnail" alt="" src="<ww:contextPath/>/resources/directory.png"/>
                    </c:when>
                    <c:otherwise>
                      <img class="thumbnail" alt="" src="http://nickthecoder.co.uk/${directory.dirThumbnail.resourceLocation}"/>
                    </c:otherwise>
                  </c:choose>
                </ww:link>
              </ww:linkInfo>
              <br/>
              <ww:linkInfo href="/images${directory.encodedPath}">
                <ww:link><c:out value="${directory.name}" default=""/></ww:link>
              </ww:linkInfo>
            </div></div></div>
        </c:forEach>
        
      </div>

      <!-- }}} end sub directories -->

      <div style="clear: both;"></div>
      
      <tiles:insert attribute="images" ignore="true" flush="false"/>

      <div style="clear: both;"></div>

    <!-- {{{ wiki -->
    <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
      <tiles:put name="wikiNamespace" value="image"/>
      <tiles:put name="wikiTitle" value="${WEB_FILE.path}"/>
    </tiles:insert>
    <!-- end wiki }}} -->
    
  </tiles:put>
</tiles:insert>

