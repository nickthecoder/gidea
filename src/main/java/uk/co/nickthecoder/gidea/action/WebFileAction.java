package uk.co.nickthecoder.gidea.action;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import uk.co.nickthecoder.gidea.model.Hierarchy;
import uk.co.nickthecoder.gidea.model.WebFile;

/**
*/

public abstract class WebFileAction extends MyAction
{

    public static final String PATH_PARAMETER = "path";

    private Hierarchy _hierarchy;

    public WebFileAction()
    {
        super();
    }

    public String getPath(HttpServletRequest request)
    {
        String path = request.getParameter(PATH_PARAMETER);
        System.out.println("WebFileAction found path : " + path);

        if (!isValidPath(path)) {
            return getDefaultPath();
        } else {
            return path;
        }
    }

    public abstract String getDefaultPath();

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
            ServletContext context = getServlet().getServletConfig().getServletContext();

            _hierarchy = getProtectedHierarchy(context, request.getContextPath());
        }

        return _hierarchy;
    }

    protected abstract Hierarchy getProtectedHierarchy(ServletContext context, String contextPath);

    public ActionForward execute(ActionMapping mapping, ActionForm theForm, HttpServletRequest request,
                    HttpServletResponse response)

    throws Exception
    {
        ActionForward parentActionForward = super.execute(mapping, theForm, request, response);
        if (parentActionForward != null) {
            return parentActionForward;
        }

        String path = getPath(request);

        WebFile webFile = getHierarchy(request).createWebFile(path);
        request.setAttribute("WEB_FILE", webFile);

        return execute(mapping, request, response, webFile);
    }

    protected abstract ActionForward execute(ActionMapping mapping, HttpServletRequest request,
                    HttpServletResponse response, WebFile webFile) throws Exception;

}

