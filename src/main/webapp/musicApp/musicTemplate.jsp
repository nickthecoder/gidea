<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="/templates/ntc/layout.jsp">

  <tiles:put name="title" type="string">
      <tiles:insert attribute="title" ignore="true" flush="false"/>
  </tiles:put>

  <tiles:put name="extraHead" type="string">
      <ww:styleSheet href="/templates/ntc/gidea.css" />
  </tiles:put>
  
  <tiles:put name="content" type="string" >

    <!-- music categories -->
    <div class="aboveHeading">
      <ul class="wiki_infoList">
        <c:forEach var="category" items="${WEB_FILE.hierarchy.root.subDirectories}" >
          <li><ww:link href="/music${category.encodedPath}"><c:out value="${category.name}"/></ww:link></li>
        </c:forEach>
      </ul>
    </div>
    <!-- end music categories -->

    <tiles:insert attribute="music" ignore="true" flush="false"/>
        
  </tiles:put>
</tiles:insert>

