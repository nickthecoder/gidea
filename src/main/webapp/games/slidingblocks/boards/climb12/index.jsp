<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp" flush="true">

  <tiles:put name="name" type="string" value="climb12"/>
  <tiles:put name="title" type="string" value="Climb 12"/>

  <tiles:put name="instructions" type="string" >

    Move the red/orange 'T' shaped piece to the top of the board.

  </tiles:put>

</tiles:insert>


