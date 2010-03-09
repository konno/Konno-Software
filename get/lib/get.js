/*
 * $Id$
 */

if ( this.XMLHttpRequest ) (function(){
    var req = new XMLHttpRequest();
    req.open('GET', '/svn/trunk/getJSON/lib/getJSON.js', true);
    req.addEventListener('readystatechange', function(){
        if ( req.readyState != 4 ||
             req.status     != 200 ) return;
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
