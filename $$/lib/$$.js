/*
 * $Id$
 */

if (!this.$$) {
    this.$$ = (function(elementList){
        return function(selectors){
            return elementList[selectors] ||
                 ( elementList[selectors]
                 = document.querySelectorAll(selectors) );
        };
    })({});
}
