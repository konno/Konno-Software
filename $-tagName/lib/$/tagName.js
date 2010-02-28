/*
 * $Id$
 */

if ( !this.$ ) this.$ = {};

$.tagName = (function(element){
    return function( name, flag ){
        return !flag &&
               element[name] ||
             ( element[name] =
                 document.getElementsByTagName(name)[0] );
    };
})({});
