package uk.co.nickthecoder.gidea.util;

import java.awt.Container;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.MediaTracker;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.metadata.IIOMetadata;
import javax.imageio.plugins.jpeg.JPEGImageWriteParam;
import javax.imageio.stream.FileImageOutputStream;

public class ThumbnailMaker implements JobQueueEntry
{

    private static final float THUMBNAIL_QUALITY = (float) 0.75;

    private static final int MAX_THUMBNAIL_WIDTH = 150;

    private static final int MAX_THUMBNAIL_HEIGHT = 150;

    private String _source;

    private String _destination;

    private int _maxWidth;

    private int _maxHeight;

    private float _quality;

    public ThumbnailMaker(String source, String destination, int maxWidth, int maxHeight, float quality)
    {
        _source = source;
        _destination = destination;
        _maxHeight = maxHeight;
        _maxWidth = maxWidth;
        _quality = quality;
    }

    public ThumbnailMaker(String source, String destination)
    {
        this(source, destination, MAX_THUMBNAIL_WIDTH, MAX_THUMBNAIL_HEIGHT, THUMBNAIL_QUALITY);
    }

    public void run()
    {
        if (_source.toLowerCase().endsWith(".svg")) {
            // MORE Handle svg thumbnail creation.
            // System.out.println( "Cant handle svg files yet" );
            return;
        }

        Image image = null;
        BufferedImage thumbImage = null;
        IIOImage iioImage = null;
        ImageWriter encoder = null;

        try {

            image = Toolkit.getDefaultToolkit().createImage(_source);

            MediaTracker mediaTracker = new MediaTracker(new Container());
            mediaTracker.addImage(image, 0);
            mediaTracker.waitForID(0);

            // determine thumbnail size from WIDTH and HEIGHT
            int thumbWidth = _maxWidth;
            int thumbHeight = _maxHeight;
            double thumbRatio = (double) thumbWidth / (double) thumbHeight;
            int imageWidth = image.getWidth(null);
            int imageHeight = image.getHeight(null);
            double imageRatio = (double) imageWidth / (double) imageHeight;
            if (thumbRatio < imageRatio) {
                thumbHeight = (int) (thumbWidth / imageRatio);
            } else {
                thumbWidth = (int) (thumbHeight * imageRatio);
            }

            // draw original image to thumbnail image object and
            // scale it to the new size on-the-fly
            thumbImage = new BufferedImage(thumbWidth, thumbHeight, BufferedImage.TYPE_INT_RGB);

            Graphics graphics = thumbImage.createGraphics();

            graphics.drawImage(image, 0, 0, thumbWidth, thumbHeight, null);
            graphics.dispose();

            FileImageOutputStream out = new FileImageOutputStream(new File(_destination));

            JPEGImageWriteParam param = new JPEGImageWriteParam(null);
            param.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
            param.setCompressionQuality(_quality);

            encoder = (ImageWriter) ImageIO.getImageWritersByFormatName("JPEG").next();

            encoder.setOutput(out);
            iioImage = new IIOImage(thumbImage, null, null);
            encoder.write((IIOMetadata) null, iioImage, param);

            out.close();

            // Thanks for code from :
            // http://developer.classpath.org/mediation/ClasspathMigration#head-d4ee9efe53a641e29ffdcd96e985bf38bbc671c1

        } catch (Exception e) {
            System.err.println("ThumbnailMaker failed");
            e.printStackTrace();

        } finally {
            if (image != null) {
                image.flush();
            }
            if (encoder != null) {
                encoder.dispose();
            }

        }

    }

    public boolean equals(Object obj)
    {
        if (!(obj instanceof ThumbnailMaker)) {
            return false;
        }
        return ((ThumbnailMaker) obj)._destination.equals(_destination);
    }

}

