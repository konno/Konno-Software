/*
 * $Id$
 */

if ( !Element.prototype.$ ) {
    Element.prototype.$ = (function(element){
        return function( selectors, flag ){
            return !flag &&
                   element[selectors] ||
                 ( element[selectors] =
                     this.querySelector(selectors) );
        };
    })({});
}
