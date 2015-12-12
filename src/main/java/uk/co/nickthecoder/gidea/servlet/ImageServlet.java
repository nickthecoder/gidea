package uk.co.nickthecoder.gidea.servlet;

import java.io.File;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import uk.co.nickthecoder.gidea.model.Hierarchy;
import uk.co.nickthecoder.gidea.model.WebDirectory;
import uk.co.nickthecoder.gidea.model.WebFile;
import uk.co.nickthecoder.gidea.model.WebImage;

public class ImageServlet extends WebFileServlet
{

    private static final long serialVersionUID = 1L;

    private static File ROOT_DIRECTORY = new File("/gidea/images");

    /**
     * Used during testing, because the album covers are not available from the
     * locally running jetty web server.
     */
    private static String TESTING_ROOT_URL = "http://giddyserv/images";

    /**
     * Urls for the images will be absolute urls without a server name.
     */
    private static String ROOT_URL = "/images";

    private static String[] imageExtensions = { "png", "jpg", "jpeg" };
    
    protected Hierarchy getProtectedHierarchy(HttpServletRequest request)
    {
        // ServletContext context = getServletConfig().getServletContext();
        if (request.getServerName().equals( "localhost" )) {
            return new ImageHierarchy( ROOT_DIRECTORY, TESTING_ROOT_URL, imageExtensions );    
        }
        return new ImageHierarchy( ROOT_DIRECTORY, ROOT_URL, imageExtensions );
    }

    protected String getViewType(HttpServletRequest request)
    {
        String size = request.getParameter("size");

        try {
            String logicalPath = getPath(request);
            WebFile webFile = getHierarchy(request).createWebFile(logicalPath);
            if (! (webFile instanceof WebDirectory)) {
                return "image";
            }
        } catch (ServletException e) {
            // Do nothing
        }

        if (size == null) {
            return super.getViewType(request);
        } else {
            return size;
        }

    }

    public class ImageHierarchy extends Hierarchy
    {
        public ImageHierarchy(File rootDirectory, String resourceLocation, String[] fileExtensions)
        {
            super(rootDirectory, resourceLocation, fileExtensions);
        }

        protected WebFile newWebFile(String logicalPath)
        {
            return new WebImage(this, logicalPath);
        }
    }
}
