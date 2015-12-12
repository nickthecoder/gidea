<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp">

  <tiles:put name="name" type="string" value="cow"/>
  <tiles:put name="title" type="string" value="Cow"/>

  <tiles:put name="instructions" type="string" >

    Complete the picture of the cow. The red square must be in the top right.

  </tiles:put>

</tiles:insert>

