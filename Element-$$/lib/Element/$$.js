/*
 * $Id$
 */

if (!Element.prototype.$$) {
    Element.prototype.$$ = (function(elementList){
        return function(selectors){
            if ( !elementList[this] )
                elementList[this] = {};
            if ( !elementList[this][selectors] )
                elementList[this][selectors] =
                    this.querySelectorAll(selectors);
            return elementList[this][selectors];
        };
    })({});
}
