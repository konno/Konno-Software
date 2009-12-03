/*
 * $Id$
 */

if (!String.prototype.trimLeft) {
    String.prototype.trimLeft = (function(regexp){
        return function(){
            return this.replace(regexp, '');
        };
    })(/^\s+/g);
}
