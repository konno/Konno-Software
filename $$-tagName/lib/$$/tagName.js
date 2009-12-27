/*
 * $Id$
 */

if (!this.$$) this.$$ = {};

$$.tagName = (function(elements){
    return function(name){
        return elements[name] ||
             ( elements[name]
             = document.getElementsByTagName(name) );
    };
})({});
