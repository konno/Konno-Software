/*
 * $Id$
 */

if ( !this.getJSON ) {
    this.getJSON = function( uri, data, callback ){
        var flag = true;
        for ( var key in data ) {
            var value = data[key];
            if (flag) {
                uri += '?';
                flag = false;
            }
            else {
                uri += '&';
            }
            if ( value == '?' ) {
                value = 'jsonp' + Math.floor( Math.random() * 1e13 );
                this[value] = callback;
            }
            uri += encodeURIComponent(key);
            if ( value == null ) continue;
            uri += '=' +  encodeURIComponent(value).replace(/%20/g, '+');
        }
        var script  = document.createElement('script');
        script.type = 'application/javascript';
        script.src  = uri;
        ( document.body ||
          document.querySelector('head') )
                  .appendChild(script);
    };
}
