import JSONHttpRequest;

if ( !this.HttpRequest ) {
    this.HttpRequest = function(){
        return this;
    };
    HttpRequest.prototype = new JSONHttpRequest();
}
