/*
 * $Id$
 */

if (!Element.prototype.show) {
    Element.prototype.show = function(value){
        this.style.display = value || 'inline';
    };
}
