/*
 * $Id$
 */

if (!this.addEventListener) {
    window.addEventListener = (function(){
        if (window.attachEvent) {
            return function(type, listener, useCapture) {
                this.attachEvent('on' + type, function(){
                    listener(window.event);
                });
            };
        }
        return function(type, listener, useCapture) {
            this['on' + type] = listener;
        };
    })();
}
