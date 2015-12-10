<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Poker - Hand Ranking" />
  <tiles:put name="tab" value="games" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/games/breadcrumbs.jsp" />
  </tiles:put>

  <tiles:put name="extraHead" type="string">
    <ww:script src="code.js"/>
    <ww:script src="/ww_resources/ww_misc.js"/>
    <ww:styleSheet href="style.css"/>
  </tiles:put>

  <tiles:put name="main" type="string" >

    [ <a href="#" onclick="return controller.begin()">Begin Game</a> ] &nbsp;
    [ <a href="index.jsp">Back</a> ] &nbsp;

    <script type="text/javascript">
    <!--
      board = new Board( ${param.width + 0}, ${param.height + 0}, ${param.timeStep} );
      controller = new Controller( board );
      board.generate();
      document.onmousemove = function (event)
      {
        controller.onMouseMove(event);
      };
    -->
    </script>

    <!-- wiki -->
    <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
      <tiles:put name="wikiName" value="games:rain-level-Width${param.width + 0}-Height${param.height + 0}-TimeStep${param.timeStep}"/>
    </tiles:insert>


  </tiles:put>
</tiles:insert>

