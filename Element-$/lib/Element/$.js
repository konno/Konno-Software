/*
 * $Id$
 */

if (!Element.prototype.$) {
    Element.prototype.$ = (function(element){
        return function(selectors){
            if ( !element[this] )
                element[this] = {};
            if ( !element[this][selectors] )
                element[this][selectors] =
                    this.querySelector(selectors);
            return element[this][selectors];
        };
    })({});
}
