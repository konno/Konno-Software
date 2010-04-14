if ( !this.removeEventListener )
    this.removeEventListener = (function(){
        return this.detachEvent
             ? function( type, listener, useCapture ){
                   this.detachEvent('on' + type, listener);
               }
             : function( type, listener, useCapture ){
                   this['on' + type] = null;
               };
    })();
