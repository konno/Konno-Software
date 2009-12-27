/*
 * $Id$
 */

if (!Element.prototype.addEventListener) {
    Element.prototype.addEventListener = (function(){
        return Element.prototype.attachEvent
             ? function(type, listener, useCapture) {
                   this.attachEvent('on' + type, listener);
               }
             : function(type, listener, useCapture) {
                   this['on' + type] = listener;
               };
    })();
}
