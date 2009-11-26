/*
 * $Id$
 */

if (!this.bind) {
    var bind = function(type, listener){
        this.addEventListener(type, listener, false);
    };
}
