<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<head>

<link href="/resources/global.css" rel="stylesheet" type="text/css"/>
<link href="/resources/normal.css" rel="stylesheet" type="text/css"/>
<link href="/gidea/resources/gidea.css" rel="stylesheet" type="text/css"/>

<title>
  Album Cover : <c:out value="${WEB_FILE.parent.name}" /> : <c:out value="${WEB_FILE.name}" />
</title>
</head>

<body class="albumCover">

  <!-- Front Cover -->
  <table class="albumCover">
    <tr>
      <td>

        <div style="width: 122mm; height: 122mm; overflow: hidden; white-space:nowrap;">
	  <div style="padding: 2mm">
            <c:out value="${WEB_FILE.parent.name}"/> - <c:out value="${WEB_FILE.name}"/>
          </div>
          <ol stlye="">
            <c:forEach var="track" items="${WEB_FILE.leaves}" >
            <c:if test="${track != null}">
              <li><app:formattedName name="${track.strippedName}" /></li>
    
            </c:if>
            </c:forEach>
          </ol>
        </div>

      </td>

      <td style="width: 122mm; height: 122mm;">
        <img style="vertical-align: top; width: 124mm;" alt="cover" src="<app:webImage directory="${WEB_FILE}" file="cover.jpg" notFoundPath="/musicApp/noImage400x400.png"/>" />
      </td>

    </tr>
  </table>

  <br/>

  <!-- Back Cover -->
  <table style="border: 1px solid #333; width: 117mm">

    <tr>
      <td style="height: 6mm; background: #fff; text-align: center; border-bottom: 1px solid #333;">
        <c:out value="${WEB_FILE.parent.name}"/> - <c:out value="${WEB_FILE.name}"/>
      </td>
    </tr>

    <tr>
      <td>
        <div style="width: 114mm; height: 137mm; background: #fff; overflow: hidden; white-space:nowrap;"> 
          <ol>
            <c:forEach var="track" items="${WEB_FILE.leaves}" >
            <c:if test="${track != null}">
              <li><app:formattedName name="${track.strippedName}" /></li>
    
            </c:if>
            </c:forEach>
          </ol>
        </div>

      </td>
    </tr>

    <tr>
      <td style="height: 6mm; background: #fff; text-align: center; border-top: 1px solid #333;">
        <c:out value="${WEB_FILE.parent.name}"/> - <c:out value="${WEB_FILE.name}"/>
      </td>
    </tr>

  </table>

</body>

