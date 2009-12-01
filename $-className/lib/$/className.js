/*
 * $Id$
 */

if (!this.$) var $ = {};

$.className = (function(elements){
    return function(name){
        if ( !elements[name] )
            elements[name] = document.getElementsByClassName(name)[0];
        return elements[name];
    };
})({});
