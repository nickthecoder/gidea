package uk.co.nickthecoder.gidea.tag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import uk.co.nickthecoder.webwidgets.util.TagUtil;

public class FormattedNameTag extends TagSupport
{
    private static final long serialVersionUID = 1L;
    
    private String _name;

    public FormattedNameTag()
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
        _name = null;
    }

    /**
     * Get method for attribute {@link #_name}.
     */
    public String getName()
    {
        return _name;
    }

    /**
     * Set method for attribute {@link #_name}.
     */
    public void setName(String name)
    {
        _name = name;
    }

    /**
  */
    public int doStartTag() throws JspException
    {
        try {

            JspWriter writer = pageContext.getOut();

            String name = getName();

            int from = 0;
            int open = getOpen(name, from);
            if (open >= 0) {

                while (open >= 0) {

                    char closeChar = name.charAt(open) == '[' ? ']' : '}';
                    String className = name.charAt(open) == '[' ? "gidea_squareBrackets" : "gidea_curlyBrackets";
                    int close = name.indexOf(closeChar, open);

                    if (close >= 0) {

                        writer.print(TagUtil.safeText(name.substring(from, open)));
                        writer.print("<span class=\"" + className + "\">");
                        writer.print(TagUtil.safeText(name.substring(open + 1, close)));
                        writer.print("</span>");

                        from = close + 1;
                        open = getOpen(name, from);

                    } else {
                        break;
                    }

                }

                writer.print(TagUtil.safeText(name.substring(from)));

            } else {

                writer.print(name);

            }

        } catch (Exception e) {
        }

        return EVAL_PAGE;
    }

    private int getOpen(String name, int start)
    {
        int a = name.indexOf("[", start);
        int b = name.indexOf("{", start);

        if (a < 0) {
            return b;
        } else {
            return ((a < b) || (b < 0)) ? a : b;
        }
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
