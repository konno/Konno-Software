/*
 * $Id$
 */

var $ = (function(element){
    return function(selectors){
        if (element[selectors]) return element[selectors];
        element[selectors] = document.querySelector(selectors);
        return element[selectors];
    };
})({});
