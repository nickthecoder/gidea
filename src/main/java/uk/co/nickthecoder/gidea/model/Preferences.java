package uk.co.nickthecoder.gidea.model;

public class Preferences
{

    public static final String SIZE_NORMAL = "normal";

    public static final String SIZE_QUICK = "quick";

    private String _size;

    public Preferences()
    {
        _size = SIZE_QUICK;
    }

    public String getSize()
    {
        return _size;
    }

    public void setSize(String value)
    {
        _size = value;
    }

}
