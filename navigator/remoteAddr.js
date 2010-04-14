/*
 * import JSONHttpRequest;
 */

if ( !navigator.remoteAddr ) {
    var req = new JSONHttpRequest();
    req.open('GET', 'http://konno-freesoftware.appspot.com/env', true);
    req.onload = function(){
        navigator.remoteAddr = req.responseJSON.REMOTE_ADDR;
    };
    req.send({
        callback: true,
    });
}
