/*
 * $Id$
 */

if ( !this.ready ) {
    this.ready = function( selectors, callback ){
        var intervalID = window.setInterval(function(){
            var element = document.querySelector(selectors);
            if ( !element ) return;
            window.clearInterval(intervalID);
            callback(element);
        }, 0);
    };
}
