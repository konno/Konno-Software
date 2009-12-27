/*
 * $Id$
 */

if (!this.addEventListener) {
    this.addEventListener = (function(){
        return this.attachEvent
             ? function(type, listener, useCapture) {
                   this.attachEvent('on' + type, listener);
               }
             : function(type, listener, useCapture) {
                   this['on' + type] = listener;
               };
    })();
}
