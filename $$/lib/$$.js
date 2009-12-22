/*
 * $Id$
 */

if (!this.$$) {
    var $$ = (function(elementList){
        return function(selectors){
            if ( !elementList[selectors] )
                elementList[selectors] =
                    document.querySelectorAll(selectors);
            return elementList[selectors];
        };
    })({});
}
