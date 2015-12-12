<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp">

  <tiles:put name="name" type="string" value="boyAndDog"/>
  <tiles:put name="title" type="string" value="Boy and Dog"/>

  <tiles:put name="instructions" type="string" >

    Rearrange to make a picture of a boy and his dog.

  </tiles:put>

</tiles:insert>

