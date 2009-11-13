/*
 * $Id$
 */

if (!Element.prototype.textContent) {
    Element.prototype.textContent = Element.prototype.innerText;
}
