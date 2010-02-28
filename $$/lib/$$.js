/*
 * $Id$
 */

if ( !this.$$ ) {
    this.$$ = (function(elementList){
        return function( selectors, flag ){
            return !flag &&
                   elementList[selectors] ||
                 ( elementList[selectors] =
                     document.querySelectorAll(selectors) );
        };
    })({});
}
