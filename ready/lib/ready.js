/*
 * $Id$
 */

if ( !this.ready ) {
    this.ready = function( selectors, callback ){
        var intervalID = window.setInterval(function(){
            if ( !document.querySelector(selectors) ) return;
            window.clearInterval(intervalID);
            callback();
        }, 0);
    };
}
