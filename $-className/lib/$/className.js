/*
 * $Id$
 */

if (!this.$) this.$ = {};

$.className = (function(element){
    return function(name){
        return element[name] ||
             ( element[name]
             = document.getElementsByClassName(name)[0] );
    };
})({});
