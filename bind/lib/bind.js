/*
 * $Id$
 */

if (!this.bind) {
    this.bind = function(type, listener){
        this.addEventListener(type, listener, false);
    };
}
