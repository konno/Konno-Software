/*
 * $Id$
 */

if (!Element.prototype.$) {
    Element.prototype.$ = function(selectors){
        return this.querySelector(selectors);
    };
}
