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
          <a id="nautilus" title="Open Nautilus ( o )" href="music:nautilus /gidea/images${WEB_FILE.encodedPath}"><img alt="O" src="<ww:contextPath/>/templates/ntc/files.png" /></a>
        </c:if>

        &nbsp;

        <c:if test="${WEB_FILE.previousDirectory != null}">
        <ww:linkInfo href="/images${WEB_FILE.previousDirectory.encodedPath}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="previousLink" title="Previous Folder ( , )"><img alt="&lt;" src="<ww:contextPath/>/templates/ntc/left.png" /></ww:link>
        </ww:linkInfo>
        </c:if>
        
        <c:if test="${WEB_FILE.parent != null}">
        <ww:linkInfo href="/images${WEB_FILE.parent.encodedPath}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="upLink" title="Parent Folder ( u )"><img alt="^" src="<ww:contextPath/>/templates/ntc/up.png" /></ww:link>
        </ww:linkInfo>
        </c:if>

        <c:if test="${WEB_FILE.nextDirectory != null}">
        <ww:linkInfo href="/images${WEB_FILE.nextDirectory.encodedPath}">
            <c:if test="${param.size != null}">
                <ww:linkParameter name="size" value="${param.size}"/>
            </c:if>
            <ww:link id="nextLink" title="Next Folder ( , )"><img alt="&gt;" src="<ww:contextPath/>/templates/ntc/right.png" /></ww:link>
        </ww:linkInfo>
        </c:if>

        &nbsp;
                    
        <ww:link id="viewThumbnails" title="Thumbnails ( v t )" href="/images${WEB_FILE.encodedPath}?size=thumbnails"><img alt="thumb" src="<ww:contextPath/>/templates/ntc/thumbnails.png"/></ww:link>
        <ww:link id="viewNormal" title="Normal Size ( v n )" href="/images${WEB_FILE.encodedPath}"><img alt="normal" src="<ww:contextPath/>/templates/ntc/normal.png"/></ww:link>
        <ww:link id="viewFullSize" title="Full Size ( v f )" href="/images${WEB_FILE.encodedPath}?size=full"><img alt="full size" src="<ww:contextPath/>/templates/ntc/full.png"/></ww:link>
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
      
      <!-- Sub-Directories -->

      <div class="thumbnails">

        <c:forEach var="directory" items="${WEB_FILE.subDirectories}">
            <div class="thumbnailBox">
              <div class="thumbnailContainer"><div class="thumbnailWrapper">
              <ww:linkInfo href="/images${directory.encodedPath}">
                <ww:link>
                  <c:choose>
                    <c:when test="${directory.dirThumbnail.exists}">
                      <img class="thumbnail" alt="" src="${directory.dirThumbnail.url}"/>
                      <img class="folderEmblem"  alt="" src="<ww:contextPath/>/templates/ntc/folder30.png" width="30px"/>
                    </c:when>
                    <c:otherwise>
                      <img class="folder" alt="" src="<ww:contextPath/>/templates/ntc/folder150.png"/>
                    </c:otherwise>
                  </c:choose>
                </ww:link>
              </ww:linkInfo>
              </div></div>
              <div class="thumbnailLabel">
              <ww:linkInfo href="/images${directory.encodedPath}">
                <ww:link><c:out value="${directory.name}" default=""/></ww:link>
              </ww:linkInfo>
              </div>
            </div>
        </c:forEach>
        
      </div>

      <!-- end sub directories -->

      <div style="clear: both;"></div>
      
      <tiles:insert attribute="images" ignore="true" flush="false"/>

      <div style="clear: both;"></div>
    
  </tiles:put>
</tiles:insert>

