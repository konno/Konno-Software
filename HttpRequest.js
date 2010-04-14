/*
 * import JSONHttpRequest;
 */

if ( !this.HttpRequest ) {
    this.HttpRequest = function HttpRequest(uri){
        this.__uri__ = uri || 'http://konno-freesoftware.appspot.com/get';
        return this;
    };

    HttpRequest.__callback__ = {};

    HttpRequest.prototype = new JSONHttpRequest();

    HttpRequest.prototype.__initCallback__ = function(request){
        return function(response){
            request.responseJSON = response;
            request.responseText = response.body;
            request.responseXML  =
              ( new DOMParser ).parseFromString(
                  response.body,
                  'application/xhtml+xml'
              );
            request.onload();
        };
    };

    HttpRequest.prototype.open =
      function( method, uri, async, user, password ){
          if ( user && password )
              uri = this.__setAuthority__( uri, user, password );
          this.__uri__ = this.__setQuery__(this.__uri__, {
              uri     : uri,
              callback: true,
          });
      };
}
