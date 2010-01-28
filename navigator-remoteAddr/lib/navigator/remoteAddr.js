/*
 * $Id$
 */

if (!navigator.remoteAddr) {
    getJSON('http://jsonip.appspot.com/', {
        callback: '?',
    }, function(json){
        navigator.remoteAddr = json.ip || '127.0.0.1';
    });
}
