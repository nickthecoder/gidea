<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/pinkwino" prefix="pw" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:importAttribute name="wikiNamespace" />
<tiles:importAttribute name="wikiTitle" />
<tiles:importAttribute name="hide" ignore="true" />

<!-- Wiki snippet -->

<pw:wikiPage namespace="${wikiNamespace}" title="${wikiTitle}">

  <c:if test="${wikiPage.exists}">
    <div class="wikibox minimised">
      <ww:boxTitle>
        <div class="hMenu2">
          <ul>
            <li><ww:standardButton type="minimize">Hide Comments</ww:standardButton><ww:standardButton type="maximize">Show Comments</ww:standardButton></li>
          </ul>
        </div>
        <ww:boxIcon>
          <div class="hMenu2">
            <ul>
              <li><a href="${wikiPage.infoUrl}">Info</a></li>
              <li><a href="${wikiPage.editUrl}">Edit</a></li>
            </ul>
          </div>
        </ww:boxIcon>
      </ww:boxTitle>
      <ww:boxContent>
        <div class="wiki_content">
            ${wikiPage.currentVersion.rendered}
        </div>
      </ww:boxContent>
    </div>

  </c:if>
  <c:if test="${! wikiPage.exists}">
    <div class="alignRight">
      <a href="${wikiPage.editUrl}">Add Comment</a>
    </div>
  </c:if>
  
</pw:wikiPage>

