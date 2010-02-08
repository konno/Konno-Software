/*
 * $Id$
 */

if (!String.prototype.hasSurrogate) {
    String.prototype.hasSurrogate = (function(hasSurrogate){
        return function(){
            return !!hasSurrogate(this);
        };
    })(/[\uD800-\uD8FF\uDC00-\uDFFF]/);
}
