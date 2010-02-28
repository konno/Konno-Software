/*
 * $Id$
 */

if ( !Element.prototype.$$ ) {
    Element.prototype.$$ = (function(elementList){
        return function( selectors, flag ){
            return !flag &&
                   elementList[selectors] ||
                 ( elementList[selectors] =
                     this.querySelectorAll(selectors) );
        };
    })({});
}
