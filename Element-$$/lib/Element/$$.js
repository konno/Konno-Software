/*
 * $Id$
 */

if (!Element.prototype.$$) {
    Element.prototype.$$ = (function(elementList){
        return function(selectors){
            if ( !elementList[selectors] )
                elementList[selectors] =
                    this.querySelectorAll(selectors);
            return elementList[selectors];
        };
    })({});
}
