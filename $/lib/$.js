/*
 * $Id$
 */

var $ = (function(element){
    return function(selector){
        if (element[selectors]) return element[selectors];
        element[selectors] = document.querySelector(selectors);
        return element[selectors];
    };
})({});
