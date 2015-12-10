<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<%@ taglib uri="/WEB-INF/struts-tiles.tld" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>

<tiles:importAttribute name="tabId" ignore="true" />

<html>

<head>
  <title><tiles:insert attribute="title" /></title>
  <ww:styleSheet href="/ww_resources/ww.css" />
  <ww:styleSheet href="/resources/global.css" useContextPath="false"/>
  <ww:styleSheet href="/resources/gidea.css" />
  <ww:styleSheet href="/wiki/templates/common/common.css" />
  <ww:styleSheet href="/wiki/templates/ntc/ntc.css" />

  <link rel="icon" href="<ww:contextPath/><tiles:insert attribute="icon" />" />


  <tiles:insert attribute="extraHead" ignore="true" />

  <ww:script src="/ww_resources/ww_minimizable.js" />

</head>

<body>

<a name="top"></a>

<table class="h1">
  <tr>
    <td>
      <h1>
        <img alt="" src="<ww:contextPath/><tiles:insert attribute="logo"/>"/>
        <tiles:insert attribute="heading" />
      </h1>
    </td>
    <td class="icons">
      <table class="icons">
        <tr>
          <td>
            <tiles:insert attribute="pageNavigation" ignore="true"/>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<%@ include file="globalNavigation.jsp" %>

<div class="breadcrumbs">
  <tiles:insert attribute="breadcrumbs" ignore="true" />&nbsp;
</div>

<br/>

<div class="content">
  <tiles:insert attribute="content" />
</div>


</body>

</html>

