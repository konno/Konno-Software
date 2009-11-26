/*
 * $Id$
 */

if (!this.removeEventListener) {
    window.removeEventListener = (function(){
        if (window.detachEvent) {
            return function(type, listener, useCapture) {
                this.detachEvent('on' + type, function(){
                    listener(window.event);
                });
            };
        }
        return function(type, listener, useCapture){
            this['on' + type] = null;
        };
    })();
}
