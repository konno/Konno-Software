/*
 * $Id$
 */

if (!this.getJSON) {
    this.getJSON = function(url, data, callback){
        var flag = true;
        for (var key in data) {
            var value = data[key];
            if (flag) {
                url += '?';
                flag = false;
            }
            else {
                url += '&';
            }
            if (value == '?') {
                value = 'jsonp'
                      + Math.floor(
                            Math.random() * 1e13
                        );
                this[value] = callback;
            }
            url += encodeURIComponent(key);
            if (value == null) continue;
            url += '='
                +  encodeURIComponent(
                       value
                   ).replace(/%20/g, '+');
        }
        var script  = document.createElement('script');
        script.type = 'application/javascript';
        script.src  = url;
        document.body.appendChild(script);
    };
}
