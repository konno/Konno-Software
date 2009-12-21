/*
 * $Id$
 */

if (!this.qr) {
    var qr = function(pattern, flags){
        return new RegExp(pattern, flags);
    };
}
