/*
 * $Id$
 */

if ( !String.prototype.__lookupSetter__('onload') ) {
    String.prototype.__defineSetter__('onload', function(listener){
        var selectors  = this;
        var intervalID = window.setInterval(function(){
            var element = document.querySelector(selectors);
            if ( !element ) return;
            window.clearInterval(intervalID);
            listener(element);
        }, 0);
    });
}
