/*
 * $Id$
 */

var $ = (function({}){
    return function(selector){
        if (elements[selector]) return elements[selector];
        elements[selector] = document.getElementsBySelector(selector);
        return elements[selector];
    };
})(elements);
