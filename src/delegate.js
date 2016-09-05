// @flow
import matches from './matches.js'; // Self-executing

export default function delegate(Element: Element, selector: string, type: string, listener: { (e: Event): void }) {
    Element.addEventListener(type, function(e): void {
        for (let target=e.target; target && target!=this; target=target.parentNode) {
            // loop parent nodes from the target to the delegation node
            if (target.matches(selector)) {
                listener(e);
                break;
            }
        }
    }, false);
}