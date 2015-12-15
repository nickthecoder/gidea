package uk.co.nickthecoder.gidea.servlet;

import java.io.IOException;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import uk.co.nickthecoder.gidea.model.Hierarchy;
import uk.co.nickthecoder.gidea.model.WebFile;

public abstract class WebFileServlet extends GideaServlet
{
    private static final long serialVersionUID = 1L;

    private Hierarchy _hierarchy;

    public WebFileServlet()
    {
        super();
    }

    /**
     * When using tomcat 7.0.28, request.getPathInfo was returning the wrong thing.
     * If there was an escaped semi-colon, then it was treating it as unescaped, and terminating the path info at that point.
     * I think it was also doing the wrong thing for utf-8 characters that were % encoded.
     * Jetty did the right thing, making test and production behave differently.
     * 
     * This is used in place of request.getPathInfo() to get the result I expect.
     */
    public static String getPathInfo(HttpServletRequest request)
    {
        String uri = request.getRequestURI();
        String pre = request.getContextPath() + request.getServletPath();

        if (uri.startsWith(pre)) {
            // Remove the context path, and the servlet path
            String path = uri.substring(pre.length());
            // Remove parameters (such as jsessionid), which use semi-colon
            // Note that regular parameters, using ?foo=bar format are NOT in
            // uri, so no need to remove them.
            path = path.replaceAll(";.*", "");
            try {
                return URLDecoder.decode(path, "UTF-8");
            } catch (Exception e) {
                // Do nothing. Fall through to default request.getPathInfo()
            }
        }
        // Hmm, didn't expect that use the normal version of getPathInfo as a
        // fall back.
        return request.getPathInfo();

    }

    public String getPath(HttpServletRequest request) throws ServletException
    {
        String path = getPathInfo(request);

        if ((path == null) || (path.length() < 2)) {

            path = request.getParameter("path");

        }

        if (path == null) {
            path = "";
        }

        try {
            path = URLDecoder.decode(path, "UTF-8");
        } catch (Exception e) {
            // Never
        }

        return path;
    }

    public boolean isValidPath(String path)
    {
        if (path == null) {
            return false;
        }

        if (path.indexOf("..") >= 0) {
            return false;
        }

        return true;
    }

    public Hierarchy getHierarchy(HttpServletRequest request)
    {
        if (_hierarchy == null) {

            _hierarchy = getProtectedHierarchy(request);
        }

        return _hierarchy;
    }

    protected abstract Hierarchy getProtectedHierarchy(HttpServletRequest request);

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        String path = getPath(request);
        WebFile webFile = getHierarchy(request).createWebFile(path);
        request.setAttribute("WEB_FILE", webFile);

        super.doGet(request, response);
    }

}
