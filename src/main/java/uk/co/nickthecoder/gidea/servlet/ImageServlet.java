package uk.co.nickthecoder.gidea.servlet;

import java.io.File;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import uk.co.nickthecoder.gidea.model.Hierarchy;
import uk.co.nickthecoder.gidea.model.WebFile;
import uk.co.nickthecoder.gidea.model.WebImage;
import uk.co.nickthecoder.gidea.model.WebImageCreator;

public class ImageServlet extends WebFileServlet
{

    private static final long serialVersionUID = 1L;

    private static String HIERARCHY_NAME = "image";

    private static File ROOT_DIRECTORY = new File("/gidea/images");

    private static String ROOT_PATH = "/images";

    public ImageServlet()
    {
        super();
    }

    protected Hierarchy getProtectedHierarchy(ServletContext context, String contextPath)
    {
        return new Hierarchy(HIERARCHY_NAME, new WebImageCreator(), ROOT_DIRECTORY, ROOT_PATH);
    }

    protected String getViewType(HttpServletRequest request)
    {
        String size = request.getParameter("size");

        try {
            String path = getPath(request);
            WebFile webFile = getHierarchy(request).createWebFile(path);
            if (webFile instanceof WebImage) {
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

}
