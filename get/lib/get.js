/*
 * $Id$
 */

if ( !this.get ) (function(){
    var script  = document.createElement('script');
    script.type = 'application/javascript';
    script.src  = 'http://' + [
        'konno.googlecode.com',
        'svn',
        'trunk',
        'getJSON',
        'lib',
        'getJSON.js',
    ].join('/');
    ( document.body ||
      document.querySelector('head') )
              .appendChild(script);
    var intervalID = window.setInterval(function(){
        if ( !this.getJSON ) return;
        window.clearInterval(intervalID);
        this.get = function( uri, callback ){
            getJSON('http://konno-freesoftware.appspot.com/get', {
                uri     : uri,
                callback: '?',
            }, function(response){
                callback( response.body );
            });
        };
    }, 0);
})();
