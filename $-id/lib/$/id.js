/*
 * $Id$
 */

if (!this.$) var $ = {};

$.id = (function(element){
    return function(id){
        if ( !element[id] )
            element[id] = document.getElementById(id);
        return element[id];
    };
})({});