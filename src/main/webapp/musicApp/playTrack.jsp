<%@ page contentType="audio/x-mpegurl;charset=UTF-8" language="java"
%><%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html"
%><%@ taglib uri="/WEB-INF/app.tld" prefix="app"
%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"
%><% response.setHeader( "Content-Disposition", "inline; filename=\"playlist.m3u\"" );
%><c:out value="${WEB_FILE.file}" escapeXml="false" />
