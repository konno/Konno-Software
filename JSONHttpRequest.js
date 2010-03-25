if ( !this.JSONHttpRequest ) {
    this.JSONHttpRequest = function(){
        return this;
    };
    JSONHttpRequest.__callback__ = {};
    JSONHttpRequest.prototype.open = function(
        method,
        uri,
        async,
        user,
        password
    ){
        var request = this;
        if ( user && password )
            uri = uri.replace('//', function(m0){
                return m0 + user + ':' + password + '@';
            });
        request.uri = uri;
    };
    JSONHttpRequest.prototype.onreadystatechange = function(){};
    JSONHttpRequest.prototype.send = (function(node){
        return function(object){
            var request = this;
            if ( object != null ) {
                var flag = true;
                Object.keys(object).forEach(function(key){
                    var value = object[key];
                    if ( flag ) request.uri += '?', flag = false;
                    else        request.uri += '&';
                    request.uri += encodeURIComponent(key);
                    if ( value == null ) return;
                    if ( value === true ) {
                        var id = Math.random();
                        JSONHttpRequest.__callback__[id] = function(response){
                            request.response = response;
                            if ( response && typeof response == 'object' ) {
                                request.responseJSON = response;
                                request.responseText =
                                  JSON.stringify(response);
                            }
                            request.status     = 200;
                            request.readyState = 4;
                            request.onreadystatechange();
                        };
                        value = 'JSONHttpRequest.__callback__[' + id + ']';
                    }
                    request.uri += '=' + encodeURIComponent(value);
                });
            }
            var script  = document.createElement('script');
            script.type = 'application/javascript';
            script.src  = request.uri;
            node.appendChild(script);
        };
    })( document.body ||
        document.getElementsByTagName('head')[0] );
}
