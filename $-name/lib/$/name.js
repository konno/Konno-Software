/*
 * $Id$
 */

if (!this.$) this.$ = {};

$.name = (function(elements){
    return function(name){
        return elements[name] ||
             ( elements[name]
             = document.getElementsByName(name)[0] );
    };
})({});
