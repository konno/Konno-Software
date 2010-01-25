/*
 * $Id$.js 168 2009-12-27 15:00:42Z Konno.Software $
 */

if (!Element.prototype.$) {
    Element.prototype.$ = (function(element){
        return function(selectors){
            return element[selectors] ||
                 ( element[selectors] =
                     document.querySelector(selectors) );
        };
    })({});
}
