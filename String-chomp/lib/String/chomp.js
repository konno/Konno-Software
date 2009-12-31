/*
 * $Id$
 */

if (!String.prototype.chomp) {
    String.prototype.chomp = (function(regexp){
        return function(){
            return this.replace(regexp, '');
        }
    })(/[\n\r]+$/);
}
