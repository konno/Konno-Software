/*
 * $Id$
 */

if (!this.bind) {
    window.bind = function(type, listener){
        this.addEventListener(type, listener, false);
    };
}
