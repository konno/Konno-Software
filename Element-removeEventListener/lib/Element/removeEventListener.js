/*
 * $Id$
 */

if (!Element.prototype.removeEventListener) {
    Element.prototype.removeEventListener = (function(){
        return Element.prototype.detachEvent
             ? function(type, listener, useCapture) {
                   this.detachEvent('on' + type, listener);
               }
             : function(type, listener, useCapture) {
                   this['on' + type] = null;
               };
    })();
}
