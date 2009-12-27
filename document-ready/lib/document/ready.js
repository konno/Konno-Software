/*
 * $Id$
 */

if (!document.ready) {
    document.ready = function(listener){
        this.addEventListener('load', listener, false);
    };
}
