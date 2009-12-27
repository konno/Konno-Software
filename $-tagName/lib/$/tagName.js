/*
 * $Id$
 */

if (!this.$) this.$ = {};

$.tagName = (function(element){
    return function(name){
        return element[name] ||
             ( element[name]
             = document.getElementsByTagName(name)[0] );
    };
})({});
