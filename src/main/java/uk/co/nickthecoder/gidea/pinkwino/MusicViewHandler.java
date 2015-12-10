package uk.co.nickthecoder.gidea.pinkwino;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import uk.co.nickthecoder.pinkwino.WikiName;
import uk.co.nickthecoder.pinkwino.link.ViewHandler;

public class MusicViewHandler implements ViewHandler
{

    public boolean view(HttpServletRequest request, HttpServletResponse response, WikiName wikiName)
    {
        try {
            String url = "/gidea/showMusic.do?path=/" + wikiName.getTitle();
            response.sendRedirect(url);
        } catch (Exception e) {
            return false;
        }

        return true;
    }

    public boolean view(HttpServletRequest request, HttpServletResponse response, WikiName wikiName, int versionNumber)
    {
        return false;
    }

}
