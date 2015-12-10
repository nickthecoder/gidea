package uk.co.nickthecoder.gidea.action;

import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

public class WordFinderAction extends MyAction
{

    public static final String FIND_PARAMETER = "find";

    public static final String WORD_LIST_PATH = "/home/nick/Documents/wordlist-threeOrMore.txt";

    public static final String GREP_COMMAND = "/bin/grep";

    public static final String RESULTS_ATTRIBUTE = "results";

    protected static Logger _logger = LogManager.getLogger(WordFinderAction.class);

    public WordFinderAction()
    {
        super();
    }

    public ActionForward execute(ActionMapping mapping, ActionForm form, HttpServletRequest request,
                    HttpServletResponse response)

    throws Exception
    {

        String find = request.getParameter(FIND_PARAMETER);

        if (find == null) {
            return mapping.findForward("show");
        }

        if (find.length() < 3) {
            request.setAttribute("message", "Must be three letters or longer.");
            return mapping.findForward("show");
        }

        find = find.toLowerCase();

        StringBuffer buffer = new StringBuffer();
        buffer.append("^");

        int letterCount = 0;

        for (int i = 0; (i < 20) && (i < find.length()); i++) {
            if (Character.isLetter(find.charAt(i))) {
                buffer.append(find.charAt(i));
                letterCount++;
            } else {
                buffer.append(".");
            }
        }

        buffer.append("$");

        if (letterCount < 1) {
            request.setAttribute("message", "Must have at least one know letter.");
            return mapping.findForward("show");
        }

        String[] command = { GREP_COMMAND, buffer.toString(), WORD_LIST_PATH };
        Process process = Runtime.getRuntime().exec(command);
        LineNumberReader reader = new LineNumberReader(new InputStreamReader(process.getInputStream()));

        ArrayList<String> results = new ArrayList<String>();

        String line = reader.readLine();
        while (line != null) {
            results.add(line);
            line = reader.readLine();
        }

        request.setAttribute(RESULTS_ATTRIBUTE, results);

        return mapping.findForward("show");

    }

}

