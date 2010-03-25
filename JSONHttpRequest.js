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
        if ( user && password )
            uri = uri.replace('//', function(m0){
                return m0 + user + ':' + password + '@';
            });
        this.uri = uri;
    };
    JSONHttpRequest.prototype.onreadystatechange = function(){};
    JSONHttpRequest.prototype.send = (function(node){
        return function(object){
            if ( object != null ) {
                var flag = true;
                for ( var key in object ) {
                    var value = object[key];
                    if ( flag ) this.uri += '?', flag = false;
                    else        this.uri += '&';
                    this.uri += encodeURIComponent(key);
                    if ( value == null ) return;
                    if ( value === true ) {
                        var id = Math.random();
                        JSONHttpRequest.__callback__[id] = function(response){
                            this.response = response;
                            if ( response && typeof response == 'object' ) {
                                this.responseJSON = response;
                                this.responseText = JSON.stringify(response);
                            }
                            this.status     = 200;
                            this.readyState = 4;
                            this.onreadystatechange();
                        };
                        value = 'JSONHttpRequest.__callback__[' + id + ']';
                    }
                    this.uri += '=' + encodeURIComponent(value);
                }
            }
            var script  = document.createElement('script');
            script.type = 'application/javascript';
            script.src  = this.uri;
            node.appendChild(script);
        };
    })( document.body ||
        document.getElementsByTagName('head')[0] );
}
