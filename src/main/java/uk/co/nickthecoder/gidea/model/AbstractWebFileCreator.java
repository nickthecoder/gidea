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
import java.util.Arrays;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import uk.co.nickthecoder.webwidgets.util.NumberStringComparator;

public abstract class AbstractWebFileCreator implements WebFileCreator
{
    protected static Logger _logger = LogManager.getLogger(AbstractWebFileCreator.class);

    public AbstractWebFileCreator()
    {
    }

    public void createChildren(WebDirectory webDirectory)
    {
        File parent = webDirectory.getFile();

        String[] childrensNames = parent.list();
        Arrays.sort(childrensNames, new NumberStringComparator());

        for (int i = 0; i < childrensNames.length; i++) {
            String path = webDirectory.getPath() + childrensNames[i];

            File file = new File(webDirectory.getHierarchy().getRootDirectory(), path);
            if (file.isHidden()) {
                continue;
            }

            WebFile child = webDirectory.getHierarchy().createWebFile(path);
            if (child != null) {
                webDirectory.add(child);
            }
        }
    }

}
