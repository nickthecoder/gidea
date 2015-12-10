package uk.co.nickthecoder.gidea.model;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * An item in the file system, which is available from the web site.
 */
public class WebFile
{

    protected static Logger _logger = LogManager.getLogger(WebImage.class);

    private Hierarchy _hierarchy;

    private String _path;

    private File _file;

    private WebDirectory _parent;

    public static boolean listedExtension(File file, String[] extensions)
    {
        String extension = getExtension(file);

        for (int i = 0; i < extensions.length; i++) {
            if (extension.equals(extensions[i])) {
                return true;
            }
        }

        return false;
    }

    public static String getExtension(File file)
    {
        String filename = file.getName();
        int lastDot = filename.lastIndexOf(".");

        if (lastDot == -1) {
            return "";
        }

        return filename.substring(lastDot + 1).toLowerCase();
    }

    public String removeTrailingSlash(String path)
    {
        if (path.endsWith("/")) {
            return path.substring(0, path.length() - 1);
        } else {
            return path;
        }
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

    public WebFile(Hierarchy hierarchy, String path)
    {
        _hierarchy = hierarchy;
        _path = path;
        _file = new File(hierarchy.getRootDirectory(), path);
        _parent = null;
    }

    public Hierarchy getHierarchy()
    {
        return _hierarchy;
    }

    public File getFile()
    {
        return _file;
    }

    public String getFileURL()
    {
        return "file://" + WebFile.encode(_file.getPath());
    }

    public String getPath()
    {
        return _path;
    }

    public String getEncodedPath()
    {
        return uk.co.nickthecoder.webwidgets.util.TagUtil.encodePath(_path);
    }

    public String getResourceLocation()
    {
        return getHierarchy().getResourceLocation() + _path;
    }

    public String getUrl()
    {
        return encode(getResourceLocation());
    }

    public String getName()
    {
        return _file.getName();
    }

    public String getStrippedName()
    {
        String name = getName();
        name = name.replaceFirst("^\\(..\\) ", "");
        name = name.replaceFirst("\\.[^.]*$", "");

        return name;
    }

    protected void setParent(WebDirectory parent)
    {
        _parent = parent;
    }

    public List<WebDirectory> getAncestors()
    {
        List<WebDirectory> list = new ArrayList<WebDirectory>();
        for (WebDirectory webDirectory = this.getParent(); webDirectory != null; webDirectory = webDirectory
                        .getParent()) {
            list.add(webDirectory);
        }

        return list;
    }

    public WebDirectory getParent()
    {

        if (_parent == null) {
            if ("/".equals(getPath())) {
                return null;
            }
            setParent((WebDirectory) (getHierarchy().createWebFile(getParentPath())));
        }
        return _parent;
    }

    protected String getParentPath()
    {
        int lastSlash = getPath().lastIndexOf("/", getPath().length() - 2);
        if (lastSlash == -1) {
            return "/";
        } else {
            return getPath().substring(0, lastSlash);
        }
    }

    public int getLevel()
    {
        int level = 0;
        String path = getPath();
        for (int i = 0; i < path.length() - 1; i++) {
            if (path.charAt(i) == '/') {
                level++;
            }
        }

        return level;
    }

    public boolean equals(Object obj)
    {
        if (obj.getClass() != this.getClass()) {
            return false;
        }

        if (obj instanceof WebFile) {
            WebFile other = (WebFile) obj;

            return (other._hierarchy.equals(this._hierarchy)) && (other._path.equals(this._path));
        }

        return false;
    }

    public WebFile getFirstSibling()
    {
        return (WebFile) getParent().getLeafList().get(0);
    }

    public WebFile getLastSibling()
    {
        List<WebFile> list = getParent().getLeafList();
        return (WebFile) list.get(list.size() - 1);
    }

    public WebFile getPreviousSibling()
    {
        try {
            List<WebFile> list = getParent().getLeafList();
            int index = list.indexOf(this) - 1;
            return list.get(index);
        } catch (Exception e) {
            return this;
        }
    }

    public WebFile getNextSibling()
    {
        try {
            List<WebFile> list = getParent().getLeafList();
            int index = list.indexOf(this) + 1;
            return (WebFile) list.get(index);
        } catch (Exception e) {
            return this;
        }
    }

}
