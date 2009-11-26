/*
 * $Id$
 */

if (!this.addEventListener) {
    var addEventListener = (function(){
        if (window.attachEvent) {
            return function(type, listener, useCapture) {
                this.attachEvent('on' + type, listener);
            };
        }
        return function(type, listener, useCapture) {
            this['on' + type] = listener;
        };
    })();
}
