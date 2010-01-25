/*
 * $Id$.js 162 2009-12-27 14:18:19Z Konno.Software $
 */

if (!this.$) {
    this.$ = (function(element){
        return function(selectors){
            return element[selectors] ||
                 ( element[selectors] =
                     document.querySelector(selectors) );
        };
    })({});
}
