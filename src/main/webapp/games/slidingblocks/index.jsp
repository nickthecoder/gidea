<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>
<%@ taglib uri="http://nickthecoder.co.uk/gidea" prefix="app" %>

<tiles:insert template="/templates/ntc/layout.jsp">

  <tiles:put name="extraHead" type="string">
      <ww:styleSheet href="/templates/ntc/gidea.css" />
  </tiles:put>
  
  <tiles:put name="title" type="string" value="Crossword Solver" />

  <tiles:put name="content" type="string" >

    <h1>Sliding Block Puzzles</h1>

    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/panda/index.jsp"><img alt="panda" src="boards/panda/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
          Panda
      </div>
    </div>
          
    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/manAndWoman/index.jsp"><img alt="man and woman" src="boards/manAndWoman/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
        Man and Woman
      </div>
    </div>
      
    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/blockTen/index.jsp"><img alt="Block Ten" src="boards/blockTen/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
        Block Ten
      </div>
    </div>

    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/123/index.jsp"><img alt="1 2 3" src="boards/123/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
        123
      </div>
    </div>

    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/egg/index.jsp"><img alt="Egg" src="boards/egg/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
        Egg
      </div>
    </div>

    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/cow/index.jsp"><img alt="Cow" src="boards/cow/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
        Cow
      </div>
    </div>

    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/boyAndDog/index.jsp"><img alt="Boy and Dog" src="boards/boyAndDog/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
        Boy and Dog
      </div>
    </div>

    <div class="thumbnailBox">
      <div class="thumbnailContainer"><div class="thumbnailWrapper">
          <a href="boards/climb12/index.jsp"><img alt="Climb 12" src="boards/climb12/small.png"/></a>
      </div></div>
      <div class="thumbnailLabel">
        Climb 12
      </div>
    </div>

    </div>
  </tiles:put>
</tiles:insert>
