/*
 * $Id$
 */

if (!Element.prototype.$) {
    Element.prototype.$ = (function(element){
        return function(selectors){
            if ( !element[selectors] )
                element[selectors] =
                    this.querySelector(selectors);
            return element[selectors];
        };
    })({});
}
