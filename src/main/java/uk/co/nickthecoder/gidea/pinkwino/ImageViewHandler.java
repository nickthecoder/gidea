package uk.co.nickthecoder.gidea.pinkwino;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import uk.co.nickthecoder.pinkwino.WikiName;
import uk.co.nickthecoder.pinkwino.link.ViewHandler;

public class ImageViewHandler implements ViewHandler
{

    public boolean view(HttpServletRequest request, HttpServletResponse response, WikiName wikiName)
    {
        try {
            String url;
            if (wikiName.getTitle().endsWith("/")) {
                url = "/gidea/images/" + wikiName.getTitle();
            } else {
                url = "/gidea/image/" + wikiName.getTitle();
            }
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
