/*
 * $Id$
 */

if (!Element.prototype.removeEventListener) {
    Element.prototype.removeEventListener = (function(){
        if (Element.prototype.detachEvent) {
            return function(type, listener, useCapture) {
                this.detachEvent('on' + type, listener);
            };
        }
        return function(type, listener, useCapture) {
            this['on' + type] = null;
        };
    })();
}
