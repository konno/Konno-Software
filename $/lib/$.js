/*
 * $Id$
 */

if (!this.$) {
    this.$ = (function(element){
        return function(selectors){
            return element[selectors] ||
                 ( element[selectors]
                 = document.querySelector(selectors) );
        };
    })({});
}
