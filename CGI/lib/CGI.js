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
                         var key    = splits[0];
                         var value  = splits[1];
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
