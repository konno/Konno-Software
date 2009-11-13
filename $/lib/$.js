/*
 * $Id$
 */

var $ = (function(elements){
    return function(selector){
        if (elements[selector]) return elements[selector];
        elements[selector] = document.getElementsBySelector(selector);
        return elements[selector];
    };
})({});
