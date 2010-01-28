/*
 * $Id$
 */

if (!navigator.remoteAddr) {
    navigator.remoteAddr = '127.0.0.1';
    getJSON('http://jsonip.appspot.com/', {
        callback: '?',
    }, function(json){
        if (!json.ip) return;
        navigator.remoteAddr = json.ip;
    });
}
