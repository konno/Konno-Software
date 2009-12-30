/*
 * $Id$
 */

if (!String.prototype.$) {
    String.prototype.$ = (function(element){
        return function(){
            return element[this] ||
                 ( element[this]
                 = document.querySelector(this) );
        };
    })({});
}
