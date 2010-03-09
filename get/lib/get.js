/*
 * $Id$
 */

if ( this.XMLHttpRequest ) (function(){
    var req = new XMLHttpRequest();
    req.open('GET', 'http://' + [
        'konno.googlecode.com',
        'svn',
        'trunk',
        'getJSON',
        'lib',
        'getJSON.js',
    ].join('/'), true);
    req.addEventListener('readystatechange', function(){
        if ( req.readyState != 4 ||
             req.status     != 200 ) return;
        alert( req.responseText );
        eval( req.responseText );
    }, false);
    req.send(null);
})();

if ( !this.get ) {
    this.get = function( uri, callback ){
        getJSON('http://konno-freesoftware.appspot.com/get', {
            uri     : uri,
            callback: '?',
        }, function(content){
            callback(content);
        });
    };
}
