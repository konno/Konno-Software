/*
 * $Id$
 */

if (!Element.prototype.$$) {
    Element.prototype.$$ = (function(elementList){
        return function(selectors){
            return elementList[selectors] ||
                 ( elementList[selectors]
                 = document.querySelectorAll(selectors) );
        };
    })({});
}
