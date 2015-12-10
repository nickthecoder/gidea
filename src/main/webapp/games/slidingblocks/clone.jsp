<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp" flush="true">

  <tiles:put name="name" type="string" value="clone"/>
  <tiles:put name="title" type="string" value="Cloned Board"/>

  <tiles:put name="instructions" type="string" >

    This is a cloned board. See the original for instructions.

    <h2>Moves So Far</h2>
      <pre>
<script>
  document.write( opener.board.controller.history.listMoves() );
</script>
      </pre>

  </tiles:put>

</tiles:insert>


