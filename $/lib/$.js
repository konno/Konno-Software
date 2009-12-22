/*
 * $Id$.js 108 2009-12-10 09:25:34Z Konno.Software $
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
