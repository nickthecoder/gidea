<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>

<tiles:insert template="/templates/ntc/layout.jsp" flush="false">

  <tiles:put name="extraHead" type="string">
    <ww:styleSheet href="/templates/ntc/gidea.css" />
  </tiles:put>

  <tiles:put name="title" type="string">
    Games
  </tiles:put>

  <tiles:put name="content" type="string" >

    <h1>Games</h1>
    
    <p>
        Here's a couple of web based games that I wrote many years ago.
        They are all pretty naff (well, the sliding block puzzles are quite good).
        If you prefer games with a bit more action, you could try out the downloadable games
        in the <a href="/wiki/software/Software">Software</a> section. 
    </p>
    
    <h3><a href="slidingblocks/">Sliding Block Puzzles</a></h3>
    <p>
        Move the wooden pieces around a board. Sounds easy, but is very hard! 
    </p>
    
    <h3><a href="wordBlitz/">Word Blitz</a></h3>
    <p>
        Inspired by a games machine in a pub. Clear the board by making words.
    </p>
    
    <h3><a href="super7/">Super Seven</a></h3>
    <p>
        A friend of an ex showed me this board game. It's an interesting take on Noughts and Crosses.
        It's a two person game... One day I may get round to writing an AI so I can play against the computer.
    </p>
    
    <h3><a href="crosswordSolver.jsp">Crossword Solver</a></h3>
    <p>
        Stuck on a crossword clue? Already got some of the letters? Then you could cheat...
    </p>

  </tiles:put>
</tiles:insert>

