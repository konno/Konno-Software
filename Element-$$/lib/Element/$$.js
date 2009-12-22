/*
 * $Id$
 */

if (!Element.prototype.$$) {
    Element.prototype.$$ = function(selectors){
        return this.querySelectorAll(selectors);
    };
}
