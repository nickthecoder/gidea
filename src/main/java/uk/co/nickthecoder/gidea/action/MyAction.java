package uk.co.nickthecoder.gidea.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import uk.co.nickthecoder.gidea.model.Preferences;

/**
 * All of my actions will be inherited from this action.
 */

public abstract class MyAction extends Action
{
    public MyAction()
    {
        super();
    }

    public ActionForward execute(ActionMapping mapping, ActionForm theForm, HttpServletRequest request,
                    HttpServletResponse response)

    throws Exception
    {

        Preferences preferences = (Preferences) request.getSession().getAttribute("preferences");
        if (preferences == null) {
            preferences = new Preferences();
            request.getSession().setAttribute("preferences", preferences);
        }
        if (request.getParameter("size") != null) {
            preferences.setSize(request.getParameter("size"));
        }

        return super.execute(mapping, theForm, request, response);
    }

}

