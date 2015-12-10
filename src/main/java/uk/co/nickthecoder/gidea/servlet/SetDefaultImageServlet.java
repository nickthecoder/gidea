package uk.co.nickthecoder.gidea.servlet;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import uk.co.nickthecoder.gidea.model.WebDirectory;
import uk.co.nickthecoder.gidea.model.WebFile;
import uk.co.nickthecoder.gidea.model.WebImage;

public class SetDefaultImageServlet extends ImageServlet
{
    private static final long serialVersionUID = 1L;

    public SetDefaultImageServlet()
    {
        super();
    }

    protected String getViewType(HttpServletRequest request)
    {
        return "default";
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,
                    IOException
    {

        String path = getPath(request);
        WebFile webFile = getHierarchy(request).createWebFile(path);

        if (request.getParameter("ok") != null) {

            String destinationPath = request.getParameter("destination");
            WebDirectory destination = (WebDirectory) getHierarchy(request).createWebFile(destinationPath);

            // Attempt to delete the default thumbnail, don't worry about
            // errors.
            try {
                destination.getDirThumbnailFile().delete();
            } catch (Exception e) {
                // Do nothing
            }

            destination.getDirThumbnailFile().getParentFile().mkdir();
            symbolicLink(((WebImage) webFile).getThumbnail().getFile(), destination.getDirThumbnailFile());

            // Redirect to the page where you can see the results of setting the
            // default image.
            String url = request.getContextPath() + "/images" + destination.getParent().getEncodedPath();
            response.sendRedirect(url);
            return;
        }

        // Redirect to the view image page for the image (which has the
        // "Set Default" link on it).
        String url = request.getContextPath() + "/image" + webFile.getEncodedPath();
        response.sendRedirect(url);

    }

    private void symbolicLink(File existing, File link) throws IOException
    {
        String[] commandArray = new String[] { "/bin/ln", "-s", existing.getPath(), link.getPath() };
        Runtime.getRuntime().exec(commandArray);
    }

}
