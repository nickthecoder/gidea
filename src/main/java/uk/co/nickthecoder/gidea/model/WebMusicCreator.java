package uk.co.nickthecoder.gidea.model;

import java.io.File;

public class WebMusicCreator extends AbstractWebFileCreator
{

    public static final String[] MUSIC_EXTENSIONS = { "mp3", "wav", "ogg", "flac" };

    public static boolean isMusic(File file)
    {
        return WebFile.listedExtension(file, MUSIC_EXTENSIONS);
    }

    public WebMusicCreator()
    {
    }

    public WebFile createWebFile(Hierarchy hierarchy, String path)
    {
        File file = new File(hierarchy.getRootDirectory(), path);

        if (file.isHidden()) {
            return null;
        }

        if (file.isDirectory()) {
            return new WebDirectory(hierarchy, path);

        } else if (isMusic(file)) {
            return new WebFile(hierarchy, path);

        } else {

            System.out.println("WebMusicCreator : Failed for : " + path);
            return null;
        }
    }

}
