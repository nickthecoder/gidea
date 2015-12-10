<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp" flush="true">

  <tiles:put name="name" type="string" value="blockTen"/>
  <tiles:put name="title" type="string" value="Block Ten"/>

  <tiles:put name="instructions" type="string" >

    Move the green square to the top of the tower, and then move it to the bottom.

  </tiles:put>

</tiles:insert>

