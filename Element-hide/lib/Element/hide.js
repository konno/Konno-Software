/*
 * $Id$
 */

if (!Element.prototype.hide) {
    Element.prototype.hide = function(){
        this.style.display = 'none';
    };
}
