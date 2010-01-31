/*
 * $Id$
 */

if (!navigator.remoteAddr) {
    getJSON('http://konno-freesoftware.appspot.com/env', {
        callback: '?',
    }, function(env){
        navigator.remoteAddr = env.REMOTE_ADDR;
    });
}
