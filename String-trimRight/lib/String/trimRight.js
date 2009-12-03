/*
 * $Id$
 */

if (!String.prototype.trimRight) {
    String.prototype.trimRight = (function(regexp){
        return function(){
            return this.replace(regexp, '');
        };
    })(/\s+$/g);
}
