package uk.co.nickthecoder.gidea.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.xerces.dom.ParentNode;
import org.apache.xerces.util.XMLCatalogResolver;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

public class XMLTag
{
    private Node _node;

    public static XMLTag openDocument(URL url) throws XMLException, IOException
    {
        InputSource is = new InputSource(new InputStreamReader(url.openStream()));

        return openDocument(is);
    }

    public static XMLTag openDocument(File file) throws XMLException, IOException
    {
        InputSource is = new InputSource(new InputStreamReader(new FileInputStream(file)));

        return openDocument(is);
    }

    public static XMLTag openDocument(InputSource is) throws XMLException, IOException
    {
        try {

            XMLCatalogResolver resolver = new XMLCatalogResolver();
            resolver.setCatalogList(new String[] { "http://nickthecoder.co.uk/gidea/dtd/xhtml1-catalog.xml" });

            /*
             * DOMParser parser = new DOMParser(); parser.setProperty(
             * "http://apache.org/xml/properties/internal/entity-resolver",
             * resolver); parser.parse( is ); Document document =
             * parser.getDocument();
             */

            DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
            builder.setEntityResolver(resolver);
            Document document = builder.parse(is);

            return new XMLTag(document);

        } catch (javax.xml.parsers.ParserConfigurationException e) {
            throw new XMLException(e.getMessage());
        } catch (org.xml.sax.SAXException e) {
            throw new XMLException(e.getMessage());
        }

    }
    public XMLTag(Node node)
    {
        _node = node;
    }

    public String getName()
    {
        return _node.getNodeName();
    }

    /**
     * Returns the string value of a content-only tag, ie a tag which has a text
     * body, no attributes and no sub-tags. The html title tag is an example of
     * a content-only tag.
     */
    public String getOptionalContent(String tagName, String defaultValue) throws XMLException
    {
        if (!hasTag(tagName)) {
            return defaultValue;
        } else {
            return getContent(tagName);
        }
    }

    public String getContent(String tagName) throws XMLException
    {
        XMLTag childTag = getSingleSubTag(tagName);

        return childTag.getBody();
    }

    public String getBody() throws XMLException
    {
        StringBuffer result = new StringBuffer();
        getBody(_node, result);
        return result.toString();
    }

    private void getBody(Node node, StringBuffer result)
    {
        NodeList nodes = node.getChildNodes();

        for (int i = 0; i < nodes.getLength(); i++) {
            Node child = nodes.item(i);

            if (child.getNodeType() == Node.TEXT_NODE) {
                result.append(child.getNodeValue());
            } else if (child instanceof ParentNode) {
                getBody(child, result);
            }
        }

    }

    public XMLTag getTag(String tagName) throws XMLException
    {
        return getSingleSubTag(tagName);

    }

    public Iterator<XMLTag> getTags()
    {
        List<XMLTag> tagList = getChildren();

        return tagList.iterator();
    }

    public Iterator<XMLTag> getTags(String tagName) throws XMLException
    {
        List<XMLTag> tagList = getChildrenByTagName(tagName);

        return tagList.iterator();
    }

    public Iterator<XMLTag> getTags(String tagName, int minimum) throws XMLException
    {
        List<XMLTag> tagList = getChildrenByTagName(tagName);

        if (tagList.size() < minimum) {
            throw new XMLException("Expeceted at least " + minimum + " tags, but found only " + tagList.size());
        }

        return tagList.iterator();
    }

    public Iterator<XMLTag> getTags(String tagName, int minimum, int maximum) throws XMLException
    {
        List<XMLTag> tagList = getChildrenByTagName(tagName);

        if (tagList.size() < minimum) {
            throw new XMLException("Expeceted at least " + minimum + " tags, but found only " + tagList.size());
        }

        if (tagList.size() > maximum) {
            throw new XMLException("Expeceted at most " + maximum + " tags, but found " + tagList.size());
        }

        return tagList.iterator();
    }

    public List<XMLTag> getChildren()
    {
        ArrayList<XMLTag> result = new ArrayList<XMLTag>();

        NodeList nodeList = _node.getChildNodes();
        for (int i = 0; i < nodeList.getLength(); i++) {
            Node child = nodeList.item(i);

            if (!"#text".equals(child.getNodeName())) {
                result.add(new XMLTag(child));
            }
        }

        return result;
    }

    /**
     * Returns a List of XMLTags which are child tags of this tag, with the
     * given name.
     */
    public List<XMLTag> getChildrenByTagName(String tagName)
    {
        ArrayList<XMLTag> result = new ArrayList<XMLTag>();

        NodeList nodeList = _node.getChildNodes();
        for (int i = 0; i < nodeList.getLength(); i++) {
            Node child = nodeList.item(i);

            if (tagName.equals(child.getNodeName())) {
                result.add(new XMLTag(child));
            }
        }

        return result;
    }

    public Iterator<XMLTag> findTagsByName(String tagName)
    {
        System.out.println("\nfindTagsByName : " + tagName);

        ArrayList<XMLTag> result = new ArrayList<XMLTag>();
        findTagsByName(_node, result, tagName);
        System.out.println("found " + result.size() + " matching\n\n");

        return result.iterator();
    }

    private void findTagsByName(Node parent, ArrayList<XMLTag> result, String tagName)
    {

        NodeList nodeList = parent.getChildNodes();

        for (int i = 0; i < nodeList.getLength(); i++) {
            Node child = nodeList.item(i);

            System.out.println("Found " + child.getNodeName());

            if (tagName.equals(child.getNodeName())) {
                result.add(new XMLTag(child));
                System.out.println("Added " + child.getNodeName());
            }

            System.out.println("Recursing");
            findTagsByName(child, result, tagName);
        }

    }

    public XMLTag findTagByClass(String tagName, String className)
    {
        return findTagByAttribute(tagName, "class", className);
    }

    public XMLTag findTagById(String tagName, String id)
    {
        return findTagByAttribute(tagName, "id", id);
    }

    public XMLTag findTagByAttribute(String tagName, String attributeName, String attributeValue)
    {
        for (Iterator<XMLTag> i = findTagsByName(tagName); i.hasNext();) {
            XMLTag child = (XMLTag) i.next();

            System.out.println("Compare " + attributeValue + " with " + child.getOptionalAttribute(attributeName, null));
            if (attributeValue.equals(child.getOptionalAttribute(attributeName, null))) {
                return child;
            }
        }

        return null;
    }

    public XMLTag findTag(String tagName)
    {
        for (Iterator<XMLTag> i = findTagsByName(tagName); i.hasNext();) {
            XMLTag child = (XMLTag) i.next();
            return child;
        }
        return null;
    }

    public boolean hasTag(String tagName)
    {
        List<XMLTag> tagList = getChildrenByTagName(tagName);
        return (tagList.size() > 0);
    }

    public boolean hasAttribute(String attributeName)
    {
        try {
            return (_node.getAttributes().getNamedItem(attributeName) != null);
        } catch (Exception e) {
            return false;
        }
    }

    public String getAttribute(String attributeName) throws XMLException
    {
        try {
            Node attNode = _node.getAttributes().getNamedItem(attributeName);
            return attNode.getNodeValue();
        } catch (Exception e) {
            throw new XMLException("Expected attribute '" + attributeName + "'");
        }
    }

    public String getOptionalAttribute(String attributeName, String defaultValue) throws XMLException
    {
        if (hasAttribute(attributeName)) {
            return getAttribute(attributeName);
        } else {
            return defaultValue;
        }
    }

    public boolean getBooleanAttribute(String attributeName) throws XMLException
    {
        String value = getAttribute(attributeName);

        if ("true".equals(value)) {
            return true;

        } else if ("false".equals(value)) {
            return false;

        } else {
            throw new XMLException("Expected a boolean attribute named '" + attributeName + "', but found '" + value
                            + "'");
        }

    }

    public boolean getOptionalBooleanAttribute(String attributeName, boolean defaultValue) throws XMLException
    {
        if (hasAttribute(attributeName)) {
            return getBooleanAttribute(attributeName);
        } else {
            return defaultValue;
        }
    }

    public int getIntAttribute(String attributeName) throws XMLException
    {
        String value = getAttribute(attributeName);

        try {
            return Integer.parseInt(value);

        } catch (Exception e) {
            throw new XMLException("Expected an integer attribute named '" + attributeName + "', but found '" + value
                            + "'");
        }
    }

    public int getOptionalIntAttribute(String attributeName, int defaultValue) throws XMLException
    {
        if (hasAttribute(attributeName)) {
            return getIntAttribute(attributeName);
        } else {
            return defaultValue;
        }
    }

    /**
     * Throws an exception if any attribute have not been read, or if any
     * sub-tags have not been read. Currently not implemented, so does nothing.
     */
    public void assertAllUsed()
    {
    }

    private XMLTag getSingleSubTag(String tagName) throws XMLException
    {
        List<XMLTag> tagList = getChildrenByTagName(tagName);

        if (tagList.size() > 1) {
            throw new XMLException("Expected only one '" + tagName + "' tags, but found " + tagList.size());

        } else if (tagList.size() < 1) {
            throw new XMLException("Expected a '" + tagName + "' tag.");

        } else {
            return (XMLTag) tagList.get(0);
        }

    }

}

