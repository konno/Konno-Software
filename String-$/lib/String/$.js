/*
 * $Id$
 */

if ( !String.prototype.$ ) {
    String.prototype.$ = (function(element){
        return function(flag){
            return !flag &&
                   element[this] ||
                 ( element[this] =
                     document.querySelector(this) );
        };
    })({});
}
