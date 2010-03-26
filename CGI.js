if ( !this.CGI ) {
    this.CGI = function(uri){
alert(uri);
        if ( uri != null ) uri.replace(/.*?[#?]/)
                              .split('&')
                              .forEach(function(pair){
                                  var splits = pair.split('&');
                                  var key    = splits.shift();
                                  var value  = splits.shift();
                                  this.__param__[
                                      decodeURIComponent(
                                          key.replace(/\+/g, ' ')
                                      )
                                  ] = decodeURIComponent(
                                          value.replace(/\+/g, '')
                                      );
                              }, this);
        return this;
    };

    CGI.prototype.param = function(key){
        return key == null                        ? this.__param__
             : this.__param__.hasOwnProperty(key) ? this.__param__[key]
             :                                      null;
    };
}
