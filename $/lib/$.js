/*
 * $Id$
 */

if (!this.$) {
    var $ = (function(element){
        return function(selectors){
            if ( !element[selectors] )
                element[selectors] =
                    document.querySelector(selectors);
            return element[selectors];
        };
    })({});
}
