/*
 * $Id$
 */

if (!Element.prototype.hide) {
    Element.prototype.hide = function(value){
        this.style.display = value || 'none';
    };
}
