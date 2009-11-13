/*
 * $Id$
 */

if (!Element.prototype.text) {
    Element.prototype.text = Element.prototype.textContent;
}
