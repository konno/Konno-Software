/*
 * $Id$
 */

if (!Element.prototype.$) {
    Element.prototype.$ = (function(element){
        return function(selectors){
            return element[selectors] ||
                 ( element[selectors]
                 = document.querySelector(selectors) );
        };
    })({});
}
