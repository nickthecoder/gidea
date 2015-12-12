<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp">

  <tiles:put name="name" type="string" value="panda"/>
  <tiles:put name="title" type="string" value="Panda"/>

  <tiles:put name="instructions" type="string" >

    Move the red square to the bottom right, and complete the picture of the panda.

  </tiles:put>

</tiles:insert>


