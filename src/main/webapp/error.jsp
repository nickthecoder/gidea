<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>

<tiles:insert template="/templates/ntc/layout.jsp">

  <tiles:put name="title" type="string" value="Error" />

  <tiles:put name="content" type="string" >

  <h1>Error</h1>

  <p>
      Oops. That's weird, something went horribly wrong. Sorry.
  </p>

  </tiles:put>
</tiles:insert>

