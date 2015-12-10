package uk.co.nickthecoder.gidea.model;

import java.io.File;

public class Hierarchy
{

    private File _root;

    private WebFileCreator _webFileCreator;

    private String _name;

    private String _resourceLocation;

    private WebFile _rootWebFile;

    public static String endWithSlash(String path)
    {
        if (path.endsWith("/")) {
            return path;
        } else {
            return path + "/";
        }
    }

    public Hierarchy(String name, WebFileCreator webFileCreator, File rootDirectory, String resourceLocation)
    {
        _name = name;
        _webFileCreator = webFileCreator;
        _root = rootDirectory;
        _resourceLocation = endWithSlash(resourceLocation);

        _rootWebFile = _webFileCreator.createWebFile(this, "/");
    }

    public File getRootDirectory()
    {
        return _root;
    }

    public WebFile getRoot()
    {
        return _rootWebFile;
    }

    public String getResourceLocation()
    {
        return _resourceLocation;
    }

    public WebFileCreator getWebFileCreator()
    {
        return _webFileCreator;
    }

    public WebFile createWebFile(String path)
    {
        return _webFileCreator.createWebFile(this, path);
    }

    public String getName()
    {
        return _name;
    }

}
