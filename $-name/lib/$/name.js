/*
 * $Id$
 */

if (!this.$) this.$ = {};

$.name = (function(element){
    return function(name){
        return element[name] ||
             ( element[name] =
                 document.getElementsByName(name)[0] );
    };
})({});
