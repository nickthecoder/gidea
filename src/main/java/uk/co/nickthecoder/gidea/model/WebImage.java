package uk.co.nickthecoder.gidea.model;

import java.awt.Container;
import java.awt.Image;
import java.awt.MediaTracker;
import java.awt.Toolkit;
import java.io.File;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import uk.co.nickthecoder.gidea.util.JobQueue;
import uk.co.nickthecoder.gidea.util.ResizeImage;

public class WebImage extends WebFile
{

    public static final String QUICK_DIRECTORY = ".quick";

    public static final String THUMBNAIL_DIRECTORY = ".thumbnails";

    public static JobQueue _imageJobQueue = new JobQueue();

    public static final int QUICK_WIDTH = 640;

    public static final int QUICK_HEIGHT = 480;

    protected static Logger _logger = LogManager.getLogger(WebImage.class);

    private int _width = -1;

    private int _height = -1;

    private float _aspectRatio = (float) 0.0;

    private boolean _thumbnailQueued = false;

    private boolean _quickQueued = false;

    public static JobQueue getImageJobQueue()
    {
        return _imageJobQueue;
    }

    public WebImage(Hierarchy hierarchy, String path)
    {
        super(hierarchy, path);
    }

    public boolean isFirst()
    {
        return this.equals(getParent().getLeafList().get(0));
    }

    public boolean isLast()
    {
        return this.equals(getParent().getLeafList().get(getParent().getLeafList().size() - 1));
    }

    /**
     * Returns the name of the thumbnail, this will depend on the type of image.
     * If it is a jpg, then it is the same name as the file. Otherwise it is the
     * name of the file with .png appended.
     */
    public String getThumbnailName()
    {
        if (getName().toLowerCase().endsWith(".jpg")) {
            return getName();
        } else {
            return getName() + ".png";
        }
    }

    public WebFile getThumbnail()
    {
        WebFile thumbnail = getHierarchy().createWebFile(
                        getParent().getPath() + THUMBNAIL_DIRECTORY + "/" + getThumbnailName());

        return thumbnail;
    }

    public WebFile getQuickImage()
    {
        WebFile quick = getHierarchy().createWebFile(getParent().getPath() + QUICK_DIRECTORY + "/" + getName());
        if (quick.getFile().exists()) {
            return quick;
        } else {
            return this;
        }
    }

    public File getQuickFile()
    {
        return new File(getParent().getFile(), QUICK_DIRECTORY + "/" + getName());
    }

    public boolean getThumbnailComplete()
    {
        try {
            File full = getFile();
            File thumbnail = getThumbnail().getFile();
            File thumbDir = thumbnail.getParentFile();
            try {
                thumbDir.mkdirs();
            } catch (Exception e) {
                _logger.error("Failed to create thumbnail directory : " + thumbDir);
            }

            if (thumbDir.exists()) {
                if ((!thumbnail.exists()) || (thumbnail.lastModified() < full.lastModified())) {

                    if (!_thumbnailQueued) {

                        _logger.info("Thumbnail creation to be queued : " + getPath());

                        ResizeImage resizer = new ResizeImage(full.getPath(), thumbnail.getPath());
                        getImageJobQueue().add(resizer);
                        _thumbnailQueued = true;
                    }

                } else {
                    // Thumbnail is up to date
                    // _logger.info( "Thumbnail up to date " + getPath() );
                    return true;
                }
            }

            return false;

        } catch (RuntimeException e) {
            _logger.error("Failed to render thumbnail for " + getPath());
            e.printStackTrace();
            // return false;
            throw e;
        }

    }

    public boolean getQuickComplete()
    {
        // We don't need a small version for svg, so always return true.
        if (isSvg()) {
            return true;
        }

        File full = getFile();
        File quick = getQuickFile();
        File quickDir = quick.getParentFile();
        try {
            quickDir.mkdir();
        } catch (Exception e) {
        }

        if (quickDir.exists()) {
            if ((!quick.exists()) || (quick.lastModified() < full.lastModified())) {
                if (quick.exists() || (!_quickQueued)) {
                    // ThumbnailMaker maker = new ThumbnailMaker(
                    // full.getPath(), quick.getPath(), QUICK_WIDTH,
                    // QUICK_HEIGHT );
                    ResizeImage resizer = new ResizeImage(full.getPath(), quick.getPath(), QUICK_WIDTH, QUICK_HEIGHT);
                    getImageJobQueue().add(resizer);
                }
            } else {
                return true;
            }
        }

        return false;
    }

    public boolean isSvg()
    {
        return getName().toLowerCase().endsWith(".svg");
    }

    public int getWidth()
    {
        if (_width == -1) {
            findImageSize();
        }
        return _width;
    }

    public int getHeight()
    {
        if (_height == -1) {
            findImageSize();
        }
        return _height;
    }

    public float getAspectRatio()
    {
        if (_aspectRatio == 0.0) {

            if (_width != -1) {
                _aspectRatio = ((float) _width) / ((float) _height);
            } else {

                Image image;
                try {
                    image = loadImage(getThumbnail().getFile());
                } catch (Exception e) {
                    return (float) 0.0;
                }

                _aspectRatio = ((float) image.getWidth(null)) / ((float) image.getHeight(null));
            }
        }

        return _aspectRatio;
    }

    protected void findImageSize()
    {
        Image image;
        try {
            image = loadImage(getFile());
        } catch (Exception e) {
            return;
        }

        _width = image.getWidth(null);
        _height = image.getHeight(null);
    }

    protected Image loadImage(File file) throws Exception
    {
        Image image = Toolkit.getDefaultToolkit().createImage(file.getPath());

        MediaTracker mediaTracker = new MediaTracker(new Container());
        mediaTracker.addImage(image, 0);
        mediaTracker.waitForID(0);

        return image;
    }

}
