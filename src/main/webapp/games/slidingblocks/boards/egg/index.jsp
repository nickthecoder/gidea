<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp">

  <tiles:put name="name" type="string" value="egg"/>
  <tiles:put name="title" type="string" value="Egg"/>

  <tiles:put name="instructions" type="string" >

    Complete the egg shape - its harder than it looks.

  </tiles:put>

</tiles:insert>

