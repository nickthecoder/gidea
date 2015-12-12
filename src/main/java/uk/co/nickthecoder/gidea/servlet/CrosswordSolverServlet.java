package uk.co.nickthecoder.gidea.servlet;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class CrosswordSolverServlet extends GideaServlet
{
    private static final Logger _logger = LogManager.getLogger(CrosswordSolverServlet.class);

    private static final long serialVersionUID = 1L;

    public static final String WORD_LIST_PATH = "/home/nick/documents/wordlist-threeOrMore.txt";

    public static final String GREP_COMMAND = "/bin/grep";

    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        String text = request.getParameter("text");
        
        if ( text != null) {
            
            solve( request, text );

        }
        super.doGet(request, response);
    }
    
    private void solve(HttpServletRequest request, String text) throws ServletException, IOException
    {
        text = text.toLowerCase();
        _logger.trace( text );
        
        StringBuffer buffer = new StringBuffer();
        buffer.append("^");

        int letterCount = 0;

        for (int i = 0; (i < 20) && (i < text.length()); i++) {
            if (Character.isLetter(text.charAt(i))) {
                buffer.append(text.charAt(i));
                letterCount++;
            } else {
                buffer.append(".");
            }
        }

        buffer.append("$");

        if (letterCount < 1) {
            request.setAttribute("message", "You must have at least one known letter.");
            return;
        }
        
        String grepString = buffer.toString();
        _logger.trace( grepString );

        String[] command = { GREP_COMMAND, grepString, WORD_LIST_PATH };
        Process process = Runtime.getRuntime().exec(command);
        LineNumberReader reader = new LineNumberReader(new InputStreamReader(process.getInputStream()));

        ArrayList<String> results = new ArrayList<String>();

        String line = reader.readLine();
        while (line != null) {
            results.add(line);
            line = reader.readLine();
        }

        request.setAttribute("results", results);
        
    }

}
