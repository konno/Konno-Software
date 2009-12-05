/*
 * $Id$
 */

if (!Element.prototype.unbind) {
    Element.prototype.unbind = function(type, listener){
        this.removeEventListener(type, listener, false);
    };
}
