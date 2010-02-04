/*
 * $Id$
 */

if (!this.CGI) {
    this.CGI = function(query){
        this.param = (function(param){
            if (query)
                query.replace(/.*[?#]/, '')
                     .split('&')
                     .forEach(function(pair){
                         var splits = pair.split('=');
                         var key    = splits.shift();
                         var value  = splits.shift();
                         if ( key   == null || 
                              value == null ) return;
                         key   = decodeURIComponent(
                                     key.replace(/\+/g, ' ')
                                 );
                         value = decodeURIComponent(
                                     value.replace(/\+/g, ' ')
                                 );
                         param[key] = value;
                     });
            return function(key){
                return !key                      ? param
                     : param.hasOwnProperty(key) ? param[key]
                     :                             null;
            };
        })({});
        return this;
    };
}
