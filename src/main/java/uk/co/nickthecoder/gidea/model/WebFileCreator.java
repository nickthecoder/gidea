package uk.co.nickthecoder.gidea.model;

/**
 * Creates WebFile objects for a particular type of hierarchy
 */
public interface WebFileCreator
{

    public WebFile createWebFile(Hierarchy hierarchy, String path);

    public void createChildren(WebDirectory webDirectory);

}
