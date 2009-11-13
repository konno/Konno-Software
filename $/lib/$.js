/*
 * $Id$.js 42 2009-11-11 19:39:54Z Konno.Software $
 */

var $ = (function(elements){
    return function(selector){
        if (elements[selector]) return elements[selector];
        elements[selector] = document.getElementsBySelector(selector);
        return elements[selector];
    };
})({});
