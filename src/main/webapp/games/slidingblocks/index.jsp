<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Sliding Block Puzzles" />
  <tiles:put name="tab" value="games" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/games/breadcrumbs.jsp" />
  </tiles:put>

  <tiles:put name="main" type="string" >

    <h1>Sliding Block Puzzles</h1>

    <table class="thumbnails">

      <tr>

        <td>
          <a href="boards/panda/index.jsp"><img alt="panda" src="boards/panda/small.png"/><br/>Panda</a>
        </td>

        <td>
          <a href="boards/manAndWoman/index.jsp"><img alt="man and woman" src="boards/manAndWoman/small.png"/><br/>Man and Woman</a>
        </td>

        <td>
          <a href="boards/blockTen/index.jsp"><img alt="Block Ten" src="boards/blockTen/small.png"/><br/>Block Ten</a>
        </td>

        <td>
          <a href="boards/123/index.jsp"><img alt="1 2 3" src="boards/123/small.png"/><br/>123</a>
        </td>

      </tr>

      <tr>

        <td>
          <a href="boards/egg/index.jsp"><img alt="Egg" src="boards/egg/small.png"/><br/>Egg</a>
        </td>

        <td>
          <a href="boards/cow/index.jsp"><img alt="Cow" src="boards/cow/small.png"/><br/>Cow</a>
        </td>

        <td>
          <a href="boards/boyAndDog/index.jsp"><img alt="Boy and Dog" src="boards/boyAndDog/small.png"/><br/>Boy and Dog</a>
        </td>

        <td>
          <a href="boards/climb12/index.jsp"><img alt="Climb 12" src="boards/climb12/small.png"/><br/>Climb 12</a>
        </td>

      </tr>

    </table>

  </tiles:put>
</tiles:insert>
