/*
 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */

package uk.co.nickthecoder.gidea.model;

import java.io.File;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * Creates WebFile objects for a hierarchy of images.
 */

public class WebImageCreator extends AbstractWebFileCreator
{

    protected static Logger _logger = LogManager.getLogger(WebImage.class);

    public static final String[] IMAGE_EXTENSIONS = { "jpg", "png", "gif", "pnm", "svg" };

    public static boolean isImage(File file)
    {
        return WebFile.listedExtension(file, IMAGE_EXTENSIONS);
    }

    public WebImageCreator()
    {
    }

    public WebFile createWebFile(Hierarchy hierarchy, String path)
    {
        File file;

        if (path == null) {
            file = hierarchy.getRootDirectory();
        } else {
            file = new File(hierarchy.getRootDirectory(), path);
        }

        if (file.isDirectory()) {
            return new WebDirectory(hierarchy, path);

        } else if (isImage(file)) {
            return new WebImage(hierarchy, path);

        } else {
            return null;
        }
    }

}
