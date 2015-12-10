<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp" flush="true">

  <tiles:put name="name" type="string" value="egg"/>
  <tiles:put name="title" type="string" value="Egg"/>

  <tiles:put name="instructions" type="string" >

    Complete the egg shape - its harder than it looks.

  </tiles:put>

</tiles:insert>

