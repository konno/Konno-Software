/*
 * $Id$
 */

if ( !this.$ ) this.$ = {};

$.name = (function(element){
    return function( name, flag ){
        return !flag &&
               element[name] ||
             ( element[name] =
                 document.getElementsByName(name)[0] );
    };
})({});
