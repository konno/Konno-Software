/*
 * $Id$
 */

var $$ = (function(elementList){
    return function(selectors){
        if (elementList[selectors]) return elementList[selectors];
        elementList[selectors] = document.querySelectorAll(selectors);
        return elementList[selectors];
    };
})({});
