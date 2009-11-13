/*
 * $Id$
 */

if (!Element.prototype.click) {
    Element.prototype.click = function(listener){
        this.addEventListener('click', listener, false);
    };
}
