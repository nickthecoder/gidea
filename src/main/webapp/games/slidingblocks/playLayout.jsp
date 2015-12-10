<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>

<tiles:importAttribute name="title" ignore="true"/>
<tiles:importAttribute name="name" ignore="true"/>
<tiles:importAttribute name="instructions" ignore="true"/>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="extraHead" type="string">
    <ww:styleSheet href="/games/slidingblocks/style.css" />
    <ww:script src="/ww_resources/ww_misc.js"/>
    <ww:script src="/ww_resources/ww_eventNotifier.js"/>
    <ww:script src="/games/slidingblocks/code.js"/>
    <ww:script src="data.js"/>
  </tiles:put>

  <tiles:put name="tab" type="string" value="games"/>

  <tiles:put name="breadcrumbs">
    <tiles:insert template="/games/breadcrumbs.jsp" />
  </tiles:put>

  <tiles:put name="title" type="string">
    Sliding Block Puzzle : ${title}
  </tiles:put>


  <tiles:put name="main" type="string" >

    <script>
      ww_onLoadAdd( function() {
        board.generate();
        board.positionPieces();
      } );
    </script>

    <div id="playArea">
    </div>

    <div id="controls">
      [ <a href="#" onclick="return board.controller.undo();">Undo</a> ]
      [ <a href="#" onclick="return board.controller.redo();">Redo</a> ]
      [ <a href="#" onclick="return board.controller.showMoves();">Show Moves</a> ]
      <!--[ <a href="#" onclick="return board.controller.cloneBoard();">Clone</a> ] -->
      [ <a href="#" onclick="return board.controller.cheat( window.solution );">Cheat</a> ]
    </div>
    
    <div class="instrcutions">

      <div class="center">
        <a href="full.png"><img alt="completed" src="small.png"/><br/>
          Click to enlarge
        </a>
      </div>

      <h2>Instructions</h2>
      ${instructions}
    </div>

    <div class="clear"></div>

    <!-- wiki -->
    <c:if test="${! empty name}">
      <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
        <tiles:put name="wikiName" value="games:${name}"/>
      </tiles:insert>
    </c:if>

    <div id="moves">
    </div>
    
  </tiles:put>
</tiles:insert>

