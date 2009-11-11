/*
 * $Id$
 */

if (!this.$) var $ = {};

$.tagName = (function(elements){
    return function(name){
        if (elements[name]) return elements[name];
        elements[name] = document.getElementsByTagName(name);
        return elements[name];
    };
})({});
