<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="/templates/ntc/layout.jsp">

  <tiles:put name="extraHead" type="string">
      <ww:styleSheet href="/templates/ntc/gidea.css" />
  </tiles:put>
  
  <tiles:put name="title" type="string" value="Crossword Solver" />

  <tiles:put name="content" type="string" >

    <h1>Crossword Solver</h1>

    <c:if test="${! empty(message)}">
    <p class="message">
      ${message}
    </p>    
    </c:if>

    <p>
      Use full stops in place of unknown letters. 
    </p>

    <form action="<ww:contextPath/>/crosswordSolver" method="get">

        <input type="text" name="text" value="<c:out value="${param.text}"/>"/>
        <input type="submit" name="go" value="Go"/>

    </form>
    
    <p>
        For example "pu..le" will find the words : <i>puzzle, purple</i> and <i>puddle</i>.
    </p>
    
    <c:if test="${! empty(results)}">
      <h2>Results</h2>
    
      <div class="crosswordSolverResults">

        <c:forEach var="result" items="${results}">
            <a href="http://en.wiktionary.org/w/index.php?title=Special%3ASearch&search=<c:out value="${result}"/>"><c:out value="${result}"/></a><br/>
        </c:forEach>
        
      </div>

    </c:if>



  </tiles:put>
</tiles:insert>

