<%@ page contentType="audio/x-mpegurl;charset=UTF-8" language="java"
%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"
%><% response.setHeader( "Content-Disposition", "inline; filename=\"playlist.m3u8\"" );
%><c:forEach var="track" items="${WEB_FILE.leaves}"
><c:out value="${track.file}" escapeXml="false" />
</c:forEach>

