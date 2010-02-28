/*
 * $Id$
 */

if ( !this.$ ) this.$ = {};

$.className = (function(element){
    return function( name, flag ){
        return !flag &&
               element[name] ||
             ( element[name] =
                 document.getElementsByClassName(name)[0] );
    };
})({});
