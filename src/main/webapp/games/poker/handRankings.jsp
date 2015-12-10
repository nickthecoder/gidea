<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/WEB-INF/webwidgets.tld" prefix="ww" %>
<%@ taglib uri="/WEB-INF/app.tld" prefix="app" %>

<tiles:insert template="/resources/layouts/columnLayout.jsp" flush="true">

  <tiles:put name="extraHead" type="string">
    <style type="text/css">
      table.cards u {
        background: #666;
        border 1px solid black;
        text-decoration: none;
      }
    </style>
  </tiles:put>

  <tiles:put name="title" type="string" value="Poker - Hand Ranking" />
  <tiles:put name="tab" value="games" />
  <tiles:put name="breadcrumbs">
    <tiles:insert template="/games/breadcrumbs.jsp" />
  </tiles:put>

  <tiles:put name="main" type="string" >

    <table class="cards" >
      <tr><td colspan="2"><a name="straightFlush"></a>Straight Flush</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='5s' src='images/small/5s.png'/>&nbsp;<img alt='6s' src='images/small/6s.png'/>&nbsp;<img alt='7s' src='images/small/7s.png'/>&nbsp;<img alt='8s' src='images/small/8s.png'/>&nbsp;<img alt='9s' src='images/small/9s.png'/></u></td>
        <td>
          <b>Five consecutive cards all of the same suit.</b>
          <br/>
          e.g. 5..9 of spades.
        </td>
      </tr>

      <tr><td colspan="2"><a name="fourOfAKind"></a>Four of a Kind</td></tr>

      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='5h' src='images/small/5h.png'/>&nbsp;<img alt='5c' src='images/small/5c.png'/>&nbsp;<img alt='5d' src='images/small/5d.png'/>&nbsp;<img alt='5s' src='images/small/5s.png'/></u>&nbsp;<img alt='2h' src='images/small/2h.png'/></td>
        <td>
          <b>Four cards of the same value</b>
          <br/>
          e.g. Four fives.
        </td>
      </tr>


      <tr><td colspan="2"><a name="fullHouse"></a>Full House</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='5h' src='images/small/5h.png'/>&nbsp;<img alt='5c' src='images/small/5c.png'/>&nbsp;<img alt='5d' src='images/small/5d.png'/>&nbsp;<img alt='2h' src='images/small/2h.png'/>&nbsp;<img alt='2c' src='images/small/2c.png'/></u></td>
        <td>
          <b>Three of a kind <i>and</i> two of a kind.</b>
          <br/>
          e.g. three fives, and a pair of twos.
        </td>
      </tr>

      <tr><td colspan="2"><a name="flush"></a>Flush</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='2s' src='images/small/2s.png'/>&nbsp;<img alt='5s' src='images/small/5s.png'/>&nbsp;<img alt='6s' src='images/small/6s.png'/>&nbsp;<img alt='js' src='images/small/js.png'/>&nbsp;<img alt='ks' src='images/small/ks.png'/></u></td>
        <td>
          <b>Five cards of the same suit, regardless of their value.</b>
          <br/>
          e.g. Five spades.
        </td>
      </tr>


      <tr><td colspan="2"><a name="straight"></a>Straight</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='5h' src='images/small/5h.png'/>&nbsp;<img alt='6c' src='images/small/6c.png'/>&nbsp;<img alt='7d' src='images/small/7d.png'/>&nbsp;<img alt='8s' src='images/small/8s.png'/>&nbsp;<img alt='9h' src='images/small/9h.png'/></u></td>
        <td>
          <b>Five consecutive cards, regardless of their suit.</b>
          <br/>
          e.g. 5..9
        </td>
      </tr>

      <tr><td colspan="2"><a name="threeOfAKind"></a>Three of a Kind</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='5h' src='images/small/5h.png'/>&nbsp;<img alt='5c' src='images/small/5c.png'/>&nbsp;<img alt='5d' src='images/small/5d.png'/></u>&nbsp;<img alt='8h' src='images/small/8h.png'/>&nbsp;<img alt='2s' src='images/small/2s.png'/></td>
        <td>
          <b>Three cards of the same value</b>
          <br/>
          e.g. three fives.
        </td>
      </tr>


      <tr><td colspan="2"><a name="twoPairs"></a>Two Pairs</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='5h' src='images/small/5h.png'/>&nbsp;<img alt='5c' src='images/small/5c.png'/></u>&nbsp;<u><img alt='2s' src='images/small/2s.png'/>&nbsp;<img alt='2d' src='images/small/2d.png'/></u>&nbsp;<img alt='8s' src='images/small/8s.png'/></td>
        <td>
          <b>Two pairs of cards, each card in a pair has the same value.</b>
          <br/>
          e.g. A pair of fives, and a pair of twos.
        </td>
      </tr>


      <tr><td colspan="2"><a name="pair"></a>Pair</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<u><img alt='5h' src='images/small/5h.png'/>&nbsp;<img alt='5c' src='images/small/5c.png'/></u>&nbsp;<img alt='7d' src='images/small/7d.png'/>&nbsp;<img alt='js' src='images/small/js.png'/>&nbsp;<img alt='kh' src='images/small/kh.png'/></td>
        <td>
          <b>Two cards with the same value.</b>
          <br/>
          e.g. A pair of fives.
        </td>
      </tr>


      <tr><td colspan="2"><a name="highCard"></a>High Card</td></tr>
      <tr>
        <td nowrap="nowrap">&nbsp;<img alt='5h' src='images/small/5h.png'/>&nbsp;<img alt='6c' src='images/small/6c.png'/>&nbsp;<img alt='7d' src='images/small/7d.png'/>&nbsp;<img alt='js' src='images/small/js.png'/>&nbsp;<img alt='kh' src='images/small/kh.png'/></td>
        <td>
          <b>None of the above.</b>
        </td>
      </tr>

    </table>


  </tiles:put>
</tiles:insert>

