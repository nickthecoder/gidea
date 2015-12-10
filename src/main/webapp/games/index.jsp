<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="title" type="string" value="Games" />
  <tiles:put name="tab" value="games" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/games/breadcrumbs.jsp" />
  </tiles:put>

  <tiles:put name="main" type="string" >

    <!-- wiki -->
    <tiles:insert template="/pinkwino/snippet.jsp" flush="false">
      <tiles:put name="wikiName" value="games:index"/>
    </tiles:insert>


  </tiles:put>
</tiles:insert>

