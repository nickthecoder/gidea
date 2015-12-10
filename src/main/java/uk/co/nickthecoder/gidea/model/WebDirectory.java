package uk.co.nickthecoder.gidea.model;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class WebDirectory extends WebFile
{

    public static final String BACKUP_HISTORY_FILENAME = ".meta/backupHistory.txt";

    private List<WebFile> _children;
    private List<WebDirectory> _subDirectories;
    private List<WebFile> _leaves;

    public WebDirectory(Hierarchy hierarchy, String path)
    {
        super(hierarchy, Hierarchy.endWithSlash(path));

        _children = null;
        _subDirectories = null;
        _leaves = null;
    }

    public File getDirThumbnailFile()
    {
        WebFile thumbnail = getHierarchy().createWebFile(getPath() + ".thumbnails/default.jpg");
        return thumbnail.getFile();
    }

    public WebFile getDirThumbnail()
    {
        WebFile thumbnail = getHierarchy().createWebFile(getPath() + ".thumbnails/default.jpg");
        if (thumbnail == null) {
            return null;
        }
        if (thumbnail.getFile().exists()) {
            return thumbnail;
        }

        return null;
    }

    protected void add(WebFile child)
    {
        child.setParent(this);

        if (child instanceof WebDirectory) {
            getSubDirectoryList().add((WebDirectory) child);
        } else {
            getLeafList().add(child);
        }

        getChildList().add(child);
    }

    public void addChildren()
    {
        _children = new LinkedList<WebFile>();
    }

    protected void lazyChildren()
    {
        if (_children == null) {
            _children = new LinkedList<WebFile>();
            _subDirectories = new LinkedList<WebDirectory>();
            _leaves = new LinkedList<WebFile>();

            getHierarchy().getWebFileCreator().createChildren(this);

        }

    }

    public WebFile getFirst()
    {
        List<WebFile> leaves = getLeafList();
        if (leaves.size() == 0) {
            return null;
        }
        return (WebFile) leaves.get(0);
    }

    public List<WebFile> getChildList()
    {
        lazyChildren();
        return _children;
    }

    public List<WebFile> getLeafList()
    {
        lazyChildren();
        return _leaves;
    }

    protected List<WebDirectory> getSubDirectoryList()
    {
        lazyChildren();
        return _subDirectories;
    }

    public Iterator<WebFile> getChildren()
    {
        return getChildList().iterator();
    }

    public Iterator<WebDirectory> getSubDirectories()
    {
        return getSubDirectoryList().iterator();
    }

    public Iterator<WebFile> getLeaves()
    {
        return getLeafList().iterator();
    }

    public List<String> getBackupHistory()
    {
        LinkedList<String> result = new LinkedList<String>();

        File file = new File(getFile(), BACKUP_HISTORY_FILENAME);
        if (!file.exists()) {
            return null;
        }

        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(file));
            while (reader.ready()) {
                String line = reader.readLine();
                result.add(line);
            }
        } catch (Exception e) {
            return null;
        } finally {
            try {
                reader.close();
            } catch (Exception e) {
                // do nothing
            }
        }

        return result;
    }

    public String getLatestBackup()
    {
        List<String> all = getBackupHistory();
        if ((all == null) || (all.size() == 0)) {
            return null;
        } else {
            return all.get(all.size() - 1);
        }

    }

    public WebDirectory getPreviousDirectory()
    {
        if (getParent() == null) {
            return null;
        }

        List<WebDirectory> list = getParent().getSubDirectoryList();
        int index = list.indexOf(this) - 1;
        if (index < 0) {
            return null;
        }
        return (WebDirectory) list.get(index);
    }

    public WebDirectory getNextDirectory()
    {
        if (getParent() == null) {
            return null;
        }

        List<WebDirectory> list = getParent().getSubDirectoryList();
        int index = list.indexOf(this) + 1;
        if (index >= list.size()) {
            return null;
        }
        return (WebDirectory) list.get(index);
    }

}

