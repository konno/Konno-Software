/*
 * $Id$
 */

if (!Element.prototype.bind) {
    Element.prototype.bind = function(type, listener){
        this.addEventListener(type, listener, false);
    };
}
