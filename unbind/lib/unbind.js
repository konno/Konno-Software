/*
 * $Id$
 */

if (!this.unbind) {
    this.unbind = function(type, listener){
        this.removeEventListener(type, listener, false);
    };
}
