/*
 * $Id$
 */

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
