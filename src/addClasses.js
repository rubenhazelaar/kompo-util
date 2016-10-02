// @flow
export default function addClasses(Element:Element, classes: Array<string>) {
    for (let i = 0, l = classes.length; i < l; ++i) {
        Element.classList.add(classes[i]);
    }
}