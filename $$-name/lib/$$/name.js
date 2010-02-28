/*
 * $Id$
 */

if ( !this.$$ ) this.$$ = {};

$$.name = (function(elements){
    return function( name, flag ){
        return !flag &&
               elements[name] ||
             ( elements[name] =
                 document.getElementsByName(name) );
    };
})({});
