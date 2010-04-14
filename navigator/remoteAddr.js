/*
 * import JSONHttpRequest;
 */

if ( !navigator.remoteAddr ) {
    var req = new JSONHttpRequest();
    req.open('GET', 'http://konno-freesoftware.appspot.com/env', true);
    req.onload = function(env){
        navigator.remoteAddr = env.REMOTE_ADDR;
    };
    req.send({
        callback: true,
    });
}
