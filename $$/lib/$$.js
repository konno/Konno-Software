/*
 * $Id$$.js 108 2009-12-10 09:25:34Z Konno.Software $
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
