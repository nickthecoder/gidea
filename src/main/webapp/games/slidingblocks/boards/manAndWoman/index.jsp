<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insert template="/games/slidingblocks/playLayout.jsp" flush="true">

  <tiles:put name="name" type="string" value="manAndWoman"/>
  <tiles:put name="title" type="string" value="Man and Woman"/>

  <tiles:put name="instructions" type="string" >

    <p>
      Move the man to the left, and the woman to the right.
    </p>

    <p>
      Do you get the joke?
    </p>

  </tiles:put>

</tiles:insert>


