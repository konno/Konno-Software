/*
 * $Id$
 */

if (!String.prototype.trim) {
    String.prototype.trim = (function(regexp){
        return function(){
            return this.replace(regexp, '');
        };
    })(/^\s+|\s+$/g);
}
