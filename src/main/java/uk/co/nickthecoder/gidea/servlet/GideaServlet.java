package uk.co.nickthecoder.gidea.servlet;

import java.io.IOException;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class GideaServlet extends HttpServlet
{
    private static final long serialVersionUID = 1L;

    public static final String UNEXPECTED_ERROR_MESSAGE = "An unexpected error occured.";

    protected static Logger _logger = LogManager.getLogger(GideaServlet.class);

    public GideaServlet()
    {
        super();
    }

    public String getPath(HttpServletRequest request) throws ServletException
    {
        String path = request.getPathInfo();

        if ((path == null) || (path.length() < 2)) {

            path = request.getParameter("path");

        }

        if (path == null) {
            path = "/";
        }

        try {
            path = URLDecoder.decode(path, "UTF-8");
        } catch (Exception e) {
            // Never
        }

        return path;
    }

    protected void error(HttpServletRequest request, HttpServletResponse response, Exception e)
    {
        try {

            _logger.error("Unexpected exception");
            _logger.error(e);
            request.setAttribute("message", UNEXPECTED_ERROR_MESSAGE);
            forward(request, response, "error");

        } catch (Exception e2) {
            _logger.error("An exception occurred while trying to handle a previous exception nicely!");
            _logger.error(e2);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        forward(request, response, getViewType(request));
    }

    protected String getViewType(HttpServletRequest request)
    {
        return "default";
    }

    /**
     * Find the jsp page that is responsible for handling this request, and then
     * forwards to that page. Mostly, the jsp page is determined by the
     * viewType, which is "view", "edit" etc. In which case, it will get this
     * information from servlet's Init parameter (which are defined in tomcat's
     * web.xml file).
     */
    protected void forward(HttpServletRequest request, HttpServletResponse response, String viewType)
                    throws ServletException, IOException
    {
        String page = null;

        if (viewType == null) {
            page = getServletConfig().getInitParameter("view.default");
        } else {
            page = getServletConfig().getInitParameter("view." + viewType);
        }

        if (page == null) {
            _logger.debug("View type " + viewType + " not found. Falling back to the default view");
            page = getServletConfig().getInitParameter("view.default");
        }

        getServletConfig().getServletContext().getRequestDispatcher(page).forward(request, response);

    }

    protected void forward(HttpServletRequest request, HttpServletResponse response) throws ServletException,
                    IOException
    {
        forward(request, response, null);
    }

}
