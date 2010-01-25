/*
 * $Id$.js 183 2009-12-30 14:24:24Z Konno.Software $
 */

if (!String.prototype.$) {
    String.prototype.$ = (function(element){
        return function(){
            return element[this] ||
                 ( element[this] =
                     document.querySelector(this) );
        };
    })({});
}
