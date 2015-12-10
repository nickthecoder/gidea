<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Games" />
  <tiles:put name="tab" value="games" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/games/breadcrumbs.jsp" />
  </tiles:put>

  <tiles:put name="main" type="string" >


    <h1>Word Finder</h1>

    <p>
      Use full stops in place of unknown letters. For example "pu..le" will find the word puzzle.
    </p>

    <c:if test="${! empty(message)}">
    <p style="color: #f22;">
      ${message}
    </p>    
    </c:if>

    <form action="/gidea/wordFinder.do" method="get">

        <input type="text" name="find" value="<c:out value="${param.find}"/>"/>
        <input type="submit" name="go" value="Go"/>

    </form>

    <c:if test="${! empty(results)}">
      <h2>Results</h2>

      <table style="width: 100%;">
      <ww:portion var="rows" items="${results}" portions="6">
        <tr>
          <c:forEach var="row" items="${rows}">
          <td style="vertical-align: top;">
            <c:forEach var="result" items="${row}">
              <a href="http://en.wiktionary.org/w/index.php?title=Special%3ASearch&search=<c:out value="${result}"/>"><c:out value="${result}"/></a><br/>
            </c:forEach>
          </td>
          </c:forEach>
        </tr>
      </ww:portion>
      </table>

    </c:if>



  </tiles:put>
</tiles:insert>

