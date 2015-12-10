package uk.co.nickthecoder.gidea.util;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ResizeImage implements JobQueueEntry
{

    private static final float DEFAULT_QUALITY = (float) 0.90;

    private static final int MAX_THUMBNAIL_WIDTH = 150;

    private static final int MAX_THUMBNAIL_HEIGHT = 150;

    protected static Logger _logger = LogManager.getLogger(ResizeImage.class);

    private String _source;

    private String _destination;

    private int _maxWidth;

    private int _maxHeight;

    private float _quality;

    public ResizeImage(String source, String destination)
    {
        this(source, destination, MAX_THUMBNAIL_WIDTH, MAX_THUMBNAIL_HEIGHT, DEFAULT_QUALITY);
    }

    public ResizeImage(String source, String destination, int maxWidth, int maxHeight)
    {
        this(source, destination, maxWidth, maxHeight, DEFAULT_QUALITY);
    }

    public ResizeImage(String source, String destination, int maxWidth, int maxHeight, float quality)
    {
        _source = source;
        _destination = destination;
        _maxHeight = maxHeight;
        _maxWidth = maxWidth;
        _quality = quality;
    }

    public void run()
    {
        try {
            _logger.info("Resizing image : " + _destination + ": " + _maxWidth + "x" + _maxHeight + " Q" + _quality);
            /*
             * LoadImage load = new LoadImage( _source ); Resize resize = new
             * Resize( Resize.TYPE_SHRINK_WITHIN, _maxWidth, _maxHeight );
             * SaveImage save = new SaveImage( _destination, _quality );
             * 
             * save.transform( resize.transform( load.getImage() ) );
             * _logger.info( "Resized image : " + _destination );
             */

            int quality = (int) (_quality * 100);
            String[] command = { "/usr/bin/convert", "-quality", Integer.toString(quality), "-thumbnail",
                            _maxWidth + "x" + _maxHeight, _source, _destination };
            Process process = Runtime.getRuntime().exec(command);
            try {
                process.waitFor();
            } catch (InterruptedException e) {
                // Do nothing
            }

        } catch (Exception e) {
            _logger.error("Failed to resize image " + _source + " to " + _destination);
            e.printStackTrace();
        }
    }

    public boolean equals(Object obj)
    {
        if (!(obj instanceof ResizeImage)) {
            return false;
        }
        return ((ResizeImage) obj)._destination.equals(_destination);
    }

}

