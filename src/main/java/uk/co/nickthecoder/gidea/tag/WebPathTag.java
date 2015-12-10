package uk.co.nickthecoder.gidea.tag;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

public class WebPathTag extends TagSupport
{
    private static final long serialVersionUID = 1L;

    private String _path;

    private String _action;

    private String _size;

    public WebPathTag()
    {
        super();
        initialise();
    }

    /**
     * Called by the constructor, and by release to set each of the tags
     * properties to their default values.
     */
    private void initialise()
    {
        _path = null;
    }

    /**
     * Get method for attribute {@link #_path}.
     */
    public String getPath()
    {
        return _path;
    }

    /**
     * Set method for attribute {@link #_path}.
     */
    public void setPath(String path)
    {
        _path = path;
    }

    public String getAction()
    {
        return _action;
    }

    public void setAction(String action)
    {
        _action = action;
    }

    public String getSize()
    {
        return _size;
    }

    public void setSize(String size)
    {
        _size = size;
    }

    public int doStartTag() throws JspException
    {
        try {

            JspWriter writer = pageContext.getOut();

            writeLink(writer, "/", "/");

            String path = getPath();
            int prevIndex = 0;
            int nextSlash;
            while ((nextSlash = path.indexOf("/", prevIndex + 1)) >= 0) {

                String subPath = path.substring(0, nextSlash + 1);

                writeLink(writer, subPath, path.substring(prevIndex + 1, nextSlash));
                writer.print("/");

                prevIndex = nextSlash;
            }
            if (prevIndex < path.length() - 1) {
                writeLink(writer, path, path.substring(prevIndex + 1));
            }

        } catch (Exception e) {
        }

        return EVAL_PAGE;
    }

    protected void writeLink(JspWriter writer, String path, String label) throws IOException
    {
        HttpServletRequest request = (HttpServletRequest) pageContext.getRequest();

        String escapedPath = uk.co.nickthecoder.webwidgets.util.TagUtil.encodePath(path);

        writer.print("<a href=\"");
        if (getAction().startsWith("/")) {
            writer.print(request.getContextPath());
        }
        writer.print(getAction());
        writer.print(escapedPath);
        if (getSize() != null) {
            writer.print("?size=" + getSize());
        }
        writer.print("\"> ");
        writer.print(label);
        writer.print(" </a>");
    }

    public int doEndTag()
    {
        return EVAL_PAGE;
    }

    public void release()
    {
        super.release();
        initialise();
    }

}
