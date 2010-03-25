if ( !this.JSONHttpRequest ) {
    this.JSONHttpRequest = function JSONHttpRequest(){
        return this;
    };

    JSONHttpRequest.__callback__ = {};

    JSONHttpRequest.prototype.__initCallback__ = function(request){
        return function(response){
            request.response = response;
            if ( response && typeof response == 'object' ) {
                request.responseJSON = response;
                request.responseText = JSON.stringify(response);
            }
            request.status     = 200;
            request.readyState = 4;
            request.onreadystatechange();
        };
    };

    JSONHttpRequest.prototype.__uri__  = '';

    JSONHttpRequest.prototype.__setQuery__ = function( uri, object ){
        var flag = true;
        Object.keys(object).forEach(function(key){
            var value = object[key];
            if ( flag ) uri += '?', flag = false;
            else        uri += '&';
            uri += encodeURIComponent(key);
            if ( value == null ) return;
            if ( value === true ) {
                var id = Math.random();
                this.constructor.__callback__[id] =
                  this.__initCallback__(this);
                value = this.constructor.name
                      + '.__callback__[' + id + ']';
            }
            uri += '='
                +  encodeURIComponent(value)
                     .replace(/%20/g, '+');
        }, this);
        return uri;
    };

    JSONHttpRequest.prototype.__setAuthority__ =
      function( uri, user, password ){
          return uri.replace('//', function(m0){
              return m0 + user + ':' + password + '@';
          });
      };

    JSONHttpRequest.prototype.open =
      function( method, uri, async, user, password ){
          this.__uri__ = user && password
                       ? this.__setAuthority__( uri, user, password )
                       : uri;
      };

    JSONHttpRequest.prototype.onreadystatechange = function(){};

    JSONHttpRequest.prototype.send = (function(node){
        return function(object){
            var script  = document.createElement('script');
            script.type = 'application/javascript';
            script.src  = object == null
                        ? this.__uri__
                        : this.__setQuery__( this.__uri__, object );
            node.appendChild(script);
        };
    })( document.body ||
        document.getElementsByTagName('head')[0] );
}
