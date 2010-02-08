/*
 * $Id$
 */

if (!String.prototype.isSurrogate) {
    String.prototype.isSurrogate = (function(isSurrogate){
        return function(){
            return !!isSurrogate(this);
        }:
    })(/^[\uD800-\uD8FF][\uDC00-\uDFFF]$/);
}
