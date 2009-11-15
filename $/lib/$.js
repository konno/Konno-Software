/*
 * $Id$.js 52 2009-11-13 12:42:25Z Konno.Software $
 */

var $ = (function(elements){
    return function(selector){
        if (elements[selector]) return elements[selector];
        elements[selector] = document.querySelector(selector);
        return elements[selector];
    };
})({});
