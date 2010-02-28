/*
 * $Id$
 */

if ( !this.$$ ) this.$$ = {};

$$.tagName = (function(elements){
    return function( name, flag ){
        return !flag &&
               elements[name] ||
             ( elements[name] =
                 document.getElementsByTagName(name) );
    };
})({});
