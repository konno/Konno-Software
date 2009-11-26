/*
 * $Id$
 */

if (!this.removeEventListener) {
    var removeEventListener = (function(){
        if (window.detachEvent) {
            return function(type, listener, useCapture) {
                this.detachEvent('on' + type, listener);
            };
        }
        return function(type, listener, useCapture){
            this['on' + type] = null;
        };
    })();
}
