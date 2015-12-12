<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://nickthecoder.co.uk/webwidgets" prefix="ww" %>

<tiles:insert template="/templates/ntc/layout.jsp" flush="false">

  <tiles:put name="title" type="string" value="Super 7" />

  <tiles:put name="extraHead" type="string">
    <ww:script src="code.js"/>
    <style>
table, tr, td { border: 0; margin: 0; padding: 0; }
    </style>
  </tiles:put>


  <tiles:put name="content" type="string" >

    <table>
      <tr>
        <td>
          <script>
            writeBoard();
          </script>
        </td>

        <td valign=top align=center>


          <table>
            <tr>
              <td>

                <form name=theForm>

                  <textarea rows="6" cols="14" name="instructions">
Roll Dice
                  </textarea>

                </form>
              </td>
            </tr>

            <tr>
              <td align=center>
                <a href="#" onClick="rollDice()"><img border=0 name="dice1" src="images/dice.png"></a>
                <a href="#" onClick="rollDice()"><img border=0 name="dice2" src="images/dice.png"></a>
                <br>
                <a href="#" onClick="rollDice()">Roll Dice</a>
              </td>
            </tr>

            <tr>
              <td align=center>
                <img border=0 name="player" src="images/dice.png"></a>
                <br>
                <a href="#" onClick="pass()">Pass</a>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>


    <a href="index.jsp">New Game</a>

    <br><br><br>

    <h2>Rules</h2>

    <p>
    Super Seven is a two player game, that works with the same
    ideas as <I>noughts and crosses</I>, but is much more fun,
    has more strategy, and also some luck.
    </p>

    <p>
    The board is made up of 9 boxes, and in each box there are
    9 squares. Each of the boxes is labelled 3 to 11. The squares
    are also labelled 3 to 11, with the exception of the each
    middle square, which isn't numbered,
    </p>

    <p>
    The board is initially empty. The first player (blue), throws
    a pair of dice. The sum of the two dice determines where the
    player is allowed to place their counter.
    </p>

    <h3>Valid Moves</h3>

    <ul>

    <li>
    If the player rolls a 7, then he may place his counter in
    any unoccupied center squares ( the ones labelled '*' ).
    Alternatively, he may place his counter in any of the
    unoccupied squares in the center box (the 7 box).
    </li>

    <li>
    If the player rolls 3 to 6, or 8 to 11, the player may place
    their counter into any
    unoccupied square with the corresponding number. Alternatively,
    they may choose to place their counter
    on <i>any numbered</i> square within the <i>box</i> with
    the corresponding number. He may <b>not</b> place his counter
    in any of the center squares ( labelled '*' ).
    <br>
    For example, if the player rolls a 1 and a 2, (totalling 3),
    he may place his piece into any square numbered 3 ( in the
    top left of each box). Alternatively he may place his
    counter into square  3, 4, 5, 6, 8, 9, 10 or 11 of the
    top left most box (the 3 box).
    </li>

    <li>
    If the player rolls a 2, he may place his counter on any
    unoccupied square.
    </li>

    <li>
    If the player rolls a 12, he may remove any of his opponents
    counters, and replace it with his own.
    </li>

    </ul>

    <h3>Passes</h3>

    <p>
    If the player cannot move, then he may throw the dice again. If
    he still cannot move, he may throw the dice once more. However,
    if after three throws of the dice, the player can still not make
    a legal move, then the player must pass.
    </p>

    <h3>Aim of the Game</h3>

    <p>
    The aim of the game is to make lines of three, just as in the
    game <i>noughts and crosses</i>. Once a player has a line of
    three within a box, that box becomes fully controlled
    by that player - all 9 squares are filled with the player's
    counters. Neither player may play in this box after it has
    been filled.
    </p>

    <p>
    Another way to control a box is to place five counters of the
    same colour into the box. All 9 squares are then filled with
    the player's counters.
    </p>

    <p>
    The winner is the first player to get a line of three
    <i>boxes</i>, or get control of 5 out of the 9 boxes.
    </p>

  </tiles:put>
</tiles:insert>



