<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="/templates/ntc/layout.jsp">

  <tiles:put name="title" type="string" value="Set Deafult Image" />

  <tiles:put name="extraHead" type="string">
      <ww:styleSheet href="/templates/ntc/gidea.css" />
  </tiles:put>
  
  <tiles:put name="content" type="string" >

    <h1>Set Default Image</h1>

    <div class="center">

      <img alt="thumbnail" src="${WEB_FILE.thumbnail.url}"/>

      <form name="theForm" method="POST" action="<ww:contextPath/>/setDefaultImage">

        <p>
          Use the thumbnail image above, as the default image for the following folder :
        </p>
 
        <p>
            <select name="destination">
              <c:forEach var="ancestor" items="${WEB_FILE.ancestors}">
                 <option value="${ancestor.path}"><c:out value="${ancestor.path}"/></option>
              </c:forEach>
            </select>
        </p>
 
        <div class="wiki_buttons">
            <input type="hidden" name="path" value="<c:out value="${WEB_FILE.path}"/>"/>
            <input type="submit" name="ok" value="Ok"/>
            <input type="submit" name="cancel" value="Cancel"/>
        </div>

      </form>

    </div>

  </tiles:put>
</tiles:insert>

