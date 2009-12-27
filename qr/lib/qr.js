/*
 * $Id$
 */

if (!this.qr) {
    this.qr = function(){
        return RegExp.apply(this, arguments);
    };
}
