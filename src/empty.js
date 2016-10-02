export default function empty(Element):Node {
    while (Element.lastChild) {
        Element.removeChild(Element.lastChild);
    }
    return Element;
}