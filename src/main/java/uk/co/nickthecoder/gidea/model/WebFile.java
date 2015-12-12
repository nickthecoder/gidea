package uk.co.nickthecoder.gidea.model;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import uk.co.nickthecoder.webwidgets.util.TagUtil;

public class WebFile
{
    protected static Logger _logger = LogManager.getLogger(WebFile.class);

    private Hierarchy _hierarchy;

    /**
     * All logical paths should NOT end with a slash. This includes root, which is the empty string.
     */
    private String _logicalPath;

    private File _file;

    private WebDirectory _parent;

    public WebFile(Hierarchy hierarchy, String logicalPath)
    {
        // We cannot allow "up directory", as this could expose the entire file system to the outside world.
        if ( logicalPath.contains( "/.." ) ) {
            throw new RuntimeException( "Bad logical path : " + logicalPath );
        }

        _hierarchy = hierarchy;
        _logicalPath = logicalPath;
        if (_logicalPath == null) {
            try {
                throw new NullPointerException();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        if (  _logicalPath.endsWith("/") ) {
            _logger.warn( "WebFile ends with a slash : " + _logicalPath );
            _logicalPath = _logicalPath.substring(0, _logicalPath.length() - 1 );
        }
    }

    public Hierarchy getHierarchy()
    {
        return _hierarchy;
    }

    public File getFile()
    {
        if (_file == null) {
            if (_logicalPath.equals("/")) {
                _file = _hierarchy.getRootDirectory();
            } else {
                _file = new File(_hierarchy.getRootDirectory(), _logicalPath);
            }
        }
        return _file;
    }

    /**
     * Use by the special "music:" urls.
     * @return The value of getFile(), but encoded so that it is a valid url path component.
     */
    public String getEncodedFile()
    {
        return TagUtil.encodePath(getFile().toString()); 
    }
    
    public String getPath()
    {
        return _logicalPath;
    }

    public String getEncodedPath()
    {
        return TagUtil.encodePath(_logicalPath);
    }

    public String getUrl()
    {
        return getHierarchy().getRootUrl() + getEncodedPath();
    }

    public String getName()
    {
        return getFile().getName();
    }

    /**
     * Return the name without the file extension and track numbers
     * @return
     */
    public String getBaseName()
    {
        String name = getFile().getName();
        int dot = name.lastIndexOf(".");
        if ( dot > 0 ) {
            name = name.substring(0,dot);
        }
        // Remove the track number of the form "(nn) " from the start of the string. 
        return name.replaceFirst("^\\(..\\) ", "");
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

    public boolean isRoot()
    {
        return _logicalPath.length() == 0;
    }
    
    public boolean getExists()
    {
        return getFile().exists();
    }
    
    public WebDirectory getParent()
    {
        if (_parent == null) {
            if (isRoot()) {
                return null;
            }
            String parentPath = getParentPath();
            if ( parentPath != null ) {
                _parent = new WebDirectory( _hierarchy, parentPath );
            }
        }
        return _parent;
    }
    
    void setParent( WebDirectory parent )
    {
        _parent = parent;
    }

    public String getParentPath()
    {
        int lastSlash = getPath().lastIndexOf("/");
        if (lastSlash < 1) {
            return null;
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

        WebFile other = (WebFile) obj;
        return (other._hierarchy == this._hierarchy) && (other._logicalPath.equals(this._logicalPath));

    }

    public WebFile getFirstSibling()
    {
        return getParent().getLeafList().get(0);
    }

    public WebFile getLastSibling()
    {
        List<WebFile> list = getParent().getLeafList();
        return list.get(list.size() - 1);
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

    public boolean isFirst()
    {
        return this.equals(getParent().getLeafList().get(0));
    }

    public boolean isLast()
    {
        return this.equals(getParent().getLeafList().get(getParent().getLeafList().size() - 1));
    }
    public String toString()
    {
        return "WebFile : " + _logicalPath;
    }
}
