/*
 * $Id$
 */

if (!Element.prototype.show) {
    Element.prototype.show = function(value){
        this.style.display =
            value
         || this.style.__display__
         || 'block';
    };
}
