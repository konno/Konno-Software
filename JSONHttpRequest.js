if ( !this.JSONHttpRequest ) {
    this.JSONHttpRequest = function(){
        return this;
    };
    JSONHttpRequest.prototype.open = function(
        method,
        uri,
        async,
        user,
        password
    ){
        if ( user && password )
            uri = uri.replace('//', function(m0){
                return m0 + user + ':' + password + '@';
            });
        this.uri = uri;
    };
}
/*
var req = new JSONHttpRequest();
req.open('GET', 'http://www.example.com/', true);
req.onreadystatechange = function(){
    if ( req.readyState != 4 &&
         req.status     != 200 ) return;
};
req.send(null);
*/
