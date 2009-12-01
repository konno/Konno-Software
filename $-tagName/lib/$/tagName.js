/*
 * $Id$
 */

if (!this.$) var $ = {};

$.tagName = (function(elements){
    return function(name){
        if ( !elements[name] )
            elements[name] = document.getElementsByTagName(name)[0];
        return elements[name];
    };
})({});
