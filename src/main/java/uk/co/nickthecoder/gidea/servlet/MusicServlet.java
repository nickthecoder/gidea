package uk.co.nickthecoder.gidea.servlet;

import java.io.File;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import uk.co.nickthecoder.gidea.model.Hierarchy;
import uk.co.nickthecoder.gidea.model.WebFile;

public class MusicServlet extends WebFileServlet
{
    private static final Logger _logger = LogManager.getLogger(MusicServlet.class);

    private static final long serialVersionUID = 1L;

    private static File ROOT_DIRECTORY = new File("/gidea/music/categories");

    /**
     * Used during testing, because the album covers are not available from the
     * locally running jetty web server.
     */
    private static String TESTING_ROOT_URL = "http://giddyserv/music/categories/";

    private static String ROOT_URL = "http://giddyserv/music/categories/";
    
    private static String[] musicExtensions = { "wav", "mp3", "ogg", "flac" };

    protected Hierarchy getProtectedHierarchy(HttpServletRequest request)
    {
        if ( request.getServerName().equals( "localhost" ) ) {
            return new Hierarchy( ROOT_DIRECTORY, TESTING_ROOT_URL, musicExtensions);
        }
        return new Hierarchy( ROOT_DIRECTORY, ROOT_URL, musicExtensions);
    }

    public String getPath(HttpServletRequest request) throws ServletException
    {
        String path = super.getPath(request);
        if ( path.equals( "" ) ) {
            return "/default";
        }
        return path;
    }
    
    protected String getViewType(HttpServletRequest request)
    {
        try {
            String logicalPath = getPath(request);
            _logger.trace( "Path : " + logicalPath );
            
            WebFile webFile = getHierarchy(request).createWebFile(logicalPath);
            _logger.trace( "Webfile : " + webFile );
            
            if (webFile.getLevel() == 1) {
                String view = request.getParameter("view");
                // Can be artist (the default), albums or catalogue??? 
                return view == null ? "albums" : view;
                
            } else if (webFile.getLevel() == 2) {
                return "artist";

            } else if (webFile.getLevel() == 3) {
                return "album";

            } else if (webFile.getLevel() == 4) {
                return "track";

            } else {
                return "error";
            }

        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
