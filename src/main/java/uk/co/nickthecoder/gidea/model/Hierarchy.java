package uk.co.nickthecoder.gidea.model;

import java.io.File;

/**
 * A resource, such as a photo can be referenced in three ways. 1) As a file in
 * the file system 2) As a public url 3) As a logical path, where '/' is the top
 * most folder available within this webapp
 * 
 * For example, my photos are stored in the folder /gidea/images/. This is given
 * a logical path of '/' and the url is http://nickthecoder.co.uk/images/
 */
public class Hierarchy
{
    private File _rootFolder;

    private String _rootUrl;

    private String[] _fileExtendions;

    public static String getExtension(File file)
    {
        String filename = file.getName();
        int lastDot = filename.lastIndexOf(".");

        if (lastDot == -1) {
            return "";
        }

        return filename.substring(lastDot + 1).toLowerCase();
    }

    /**
     * Changes symbol characters into the form %nn, and changes spaces to %20.
     */
    public static String encode(String path)
    {
        StringBuffer result = new StringBuffer();
        int from = 0;

        for (int i = 0; i < path.length(); i++) {
            char c = path.charAt(i);

            if ((c != '/') && !Character.isLetterOrDigit(c)) {
                String hex = Integer.toHexString(c);
                result.append(path.substring(from, i));
                result.append("%").append(hex);
                from = i + 1;
            }
        }

        result.append(path.substring(from));

        return result.toString().replaceAll(" ", "%20");
    }

    public Hierarchy(File rootDirectory, String resourceLocation, String[] fileExtensions)
    {
        _rootFolder = rootDirectory;
        _rootUrl = resourceLocation;
        _fileExtendions = fileExtensions;
    }

    public File getRootDirectory()
    {
        return _rootFolder;
    }

    public WebFile getRoot()
    {
        return new WebDirectory(this, "");
    }

    public String getRootUrl()
    {
        return _rootUrl;
    }

    public boolean isValidExtension(String extension)
    {
        extension = extension.toLowerCase();

        for (String ext : _fileExtendions) {
            if (ext.equals(extension)) {
                return true;
            }
        }
        return false;
    }

    public WebFile createWebFile(String logicalPath)
    {
        File file = new File(getRootDirectory(), logicalPath);
        if (file.isDirectory()) {
            return new WebDirectory(this, logicalPath);
        } else {
            return newWebFile(logicalPath);
        }
    }

    protected WebFile newWebFile(String logicalPath)
    {
        return new WebFile(this, logicalPath);
    }
}
