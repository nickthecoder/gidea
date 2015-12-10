package uk.co.nickthecoder.gidea.action;

import java.io.File;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import uk.co.nickthecoder.gidea.model.Hierarchy;
import uk.co.nickthecoder.gidea.model.WebFile;
import uk.co.nickthecoder.gidea.model.WebMusicCreator;

public class MusicAction extends WebFileAction
{
    public static final String HIERARCHY_NAME = "music";

    public static final String ROOT_PATH = "/music/categories";

    public static final File ROOT_DIRECTORY = new File("/gidea/music/categories");

    public static final String DEFAULT_PATH = "/default/";

    public MusicAction()
    {
        super();
    }

    public String getDefaultPath()
    {
        return DEFAULT_PATH;
    }

    protected Hierarchy getProtectedHierarchy(ServletContext context, String contextPath)
    {
        return new Hierarchy(HIERARCHY_NAME, new WebMusicCreator(), ROOT_DIRECTORY, ROOT_PATH);
    }

    public ActionForward execute(ActionMapping mapping, HttpServletRequest request, HttpServletResponse response,
                    WebFile webFile)

    throws Exception
    {
        if (webFile.getLevel() == 2) {
            // System.out.println( "MusicAction.ARTIST" );
            return mapping.findForward("artist");

        } else if (webFile.getLevel() == 3) {
            // System.out.println( "MusicAction.ALBUM" );
            return mapping.findForward("album");

        } else if (webFile.getLevel() == 4) {
            // System.out.println( "MusicAction.TRACK" );
            return mapping.findForward("track");

        } else {

            // System.out.println( "MusicAction.DIRECTORY" );
            return mapping.findForward("directory");
        }

    }

}

