/*
 * $Id$
 */

if (!this.$) var $ = {};

$.name = (function(elements){
    return function(name){
        if ( !elements[name] )
            elements[name] = document.getElementByName(name)[0];
        return elements[name];
    };
})({});
