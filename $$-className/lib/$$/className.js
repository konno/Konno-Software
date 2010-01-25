/*
 * $Id$
 */

if (!this.$$) this.$$ = {};

$$.className = (function(elements){
    return function(name){
        return elements[name] ||
             ( elements[name] =
                 document.getElementsByClassName(name) );
    };
})({});
