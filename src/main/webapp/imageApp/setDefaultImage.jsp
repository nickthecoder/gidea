<%@ page contentType="text/html; charset=utf-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Set Default Image" />
  <tiles:put name="tab" value="photos" />

  <tiles:put name="main" type="string" >

    <h1>Set Default Image</h1>

    <div class="center">

      <img alt="thumbnail" src="<c:out value="${WEB_FILE.thumbnail.resourceLocation}"/>"/>

      <form name="theForm" method="POST" action="<ww:contextPath/>/setDefaultImage">

        <p>
          For Folder :
          <select name="destination">
            <c:forEach var="ancestor" items="${WEB_FILE.ancestors}">
              <option value="${ancestor.path}">${ancestor.path}</option>
            </c:forEach>
          </select>
        </p>

        <input type="hidden" name="path" value="<c:out value="${WEB_FILE.path}"/>"/>
        <input type="submit" name="ok" value="Ok"/>
        <input type="submit" name="cancel" value="Cancel"/>

      </form>

    </div>

  </tiles:put>
</tiles:insert>

