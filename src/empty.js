export default function empty(Element):Node {
    while (Element.lastChild) {
        this.removeChild(Element.lastChild);
    }
    return Element;
}