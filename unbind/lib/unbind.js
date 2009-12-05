/*
 * $Id$
 */

if (!this.unbind) {
    var unbind = function(type, listener){
        this.removeEventListener(type, listener, false);
    };
}
