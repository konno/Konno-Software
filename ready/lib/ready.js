/*
 * $Id$
 */

if (!window.ready) {
    window.ready = function(listener){
        window.addEventListener('load', listener, false);
    };
}
