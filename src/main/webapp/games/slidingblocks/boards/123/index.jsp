<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp" flush="true">

  <tiles:put name="name" type="string" value="123"/>
  <tiles:put name="title" type="string" value="1 2 3"/>

  <tiles:put name="instructions" type="string" >

    Reorder the pieces, so that it reads 1..2..3.

  </tiles:put>

</tiles:insert>

