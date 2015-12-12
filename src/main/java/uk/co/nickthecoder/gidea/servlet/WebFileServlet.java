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

    public String getPath(HttpServletRequest request) throws ServletException
    {
        String path = request.getPathInfo();

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
