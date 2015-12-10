package uk.co.nickthecoder.gidea.tag;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import uk.co.nickthecoder.gidea.model.WebFile;

/**
*/

public class WebImageTag extends TagSupport
{
    private static final long serialVersionUID = 1L;

    private WebFile _directory;

    private String _file;

    private String _notFoundPath;

    public WebImageTag()
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
        _directory = null;
        _file = null;
        _notFoundPath = null;
    }

    /**
     * Get method for attribute {@link #_directory}.
     */
    public WebFile getDirectory()
    {
        return _directory;
    }

    /**
     * Set method for attribute {@link #_directory}.
     */
    public void setDirectory(WebFile directory)
    {
        _directory = directory;
    }

    public String getFile()
    {
        return _file;
    }

    public void setFile(String file)
    {
        _file = file;
    }

    /**
     * Get method for attribute {@link #_notFoundPath}.
     */
    public String getNotFoundPath()
    {
        return _notFoundPath;
    }

    /**
     * Set method for attribute {@link #_notFoundPath}.
     */
    public void setNotFoundPath(String notFoundPath)
    {
        _notFoundPath = notFoundPath;
    }

    /**
  */
    public int doStartTag() throws JspException
    {
        try {
            JspWriter writer = pageContext.getOut();

            String url;

            File file = new File(getDirectory().getFile(), getFile());

            if ((getNotFoundPath() == null) || (file.exists())) {
                url = getDirectory().getUrl() + getFile();
            } else {
                url = ((HttpServletRequest) pageContext.getRequest()).getContextPath() + getNotFoundPath();
            }

            writer.print(url);

        } catch (Exception e) {
        }

        return EVAL_PAGE;
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
