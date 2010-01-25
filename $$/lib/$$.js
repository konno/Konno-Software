/*
 * $Id$$.js 162 2009-12-27 14:18:19Z Konno.Software $
 */

if (!this.$$) {
    this.$$ = (function(elementList){
        return function(selectors){
            return elementList[selectors] ||
                 ( elementList[selectors] =
                     document.querySelectorAll(selectors) );
        };
    })({});
}
