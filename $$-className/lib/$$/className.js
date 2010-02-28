/*
 * $Id$
 */

if ( !this.$$ ) this.$$ = {};

$$.className = (function(elements){
    return function( name, flag ){
        return !flag &&
               elements[name] ||
             ( elements[name] =
                 document.getElementsByClassName(name) );
    };
})({});
