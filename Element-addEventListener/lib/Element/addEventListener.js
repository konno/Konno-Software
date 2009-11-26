/*
 * $Id$
 */

if (!Element.prototype.addEventListener) {
    Element.prototype.addEventListener = (function(){
        if (Element.prototype.attachEvent) {
            return function(type, listener, useCapture) {
                this.attachEvent('on' + type, listener);
            };
        }
        return function(type, listener, useCapture) {
            this['on' + type] = listener;
        };
    })();
}
