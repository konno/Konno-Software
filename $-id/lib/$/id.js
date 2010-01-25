/*
 * $Id$
 */

if (!this.$) this.$ = {};

$.id = (function(element){
    return function(id){
        return element[id] ||
             ( element[id] =
                 document.getElementById(id) );
    };
})({});
