/*
 * $Id$
 */

if ( !this.$ ) this.$ = {};

$.id = (function(element){
    return function( id, flag ){
        return !flag &&
               element[id] ||
             ( element[id] =
                 document.getElementById(id) );
    };
})({});
