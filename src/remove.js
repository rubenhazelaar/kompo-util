export default function(Element:Element):void {
    let parent:Node = Element.parentNode;
    if (parent) {
        parent.removeChild(Element);
    }
}