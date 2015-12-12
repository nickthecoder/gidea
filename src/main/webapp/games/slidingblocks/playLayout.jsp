<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>

<tiles:importAttribute name="title" ignore="true"/>
<tiles:importAttribute name="name" ignore="true"/>
<tiles:importAttribute name="instructions" ignore="true"/>

<tiles:insert template="/templates/ntc/layout.jsp" flush="false">

  <tiles:put name="extraHead" type="string">
    <ww:styleSheet href="/templates/ntc/gidea.css" />
    <ww:styleSheet href="/games/slidingblocks/style.css" />
    <ww:script src="/templates/ntc/webwidgets-min.js"/>
    <ww:script src="/games/slidingblocks/code.js"/>
    <ww:script src="data.js"/>
  </tiles:put>

  <tiles:put name="tab" type="string" value="games"/>

  <tiles:put name="title" type="string">
    Sliding Block Puzzle : ${title}
  </tiles:put>

  <tiles:put name="content" type="string" >

    <script>
      window.addEventListener( "load", function() {
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

    <div id="moves">
    </div>
    
  </tiles:put>
</tiles:insert>

