/*
 * $Id$
 */

if ( encodeURIComponent(
         String.fromCharCode(0x10000)
     ) != '%F0%90%80%80' ) {
    encodeURIComponent = (function(__encodeURIComponent__){
        function(str){
            var encoded = '';
            Array.prototype.forEach.call(function(c){
                var codeunit = c.charCodeAt(0);
                if (codeunit < 0x10000) {
                    encoded += __encodeURIComponent__(c);
                    return;
                }
                encoded += '%' + codeunit.toString(16);
            });
            return encoded;
        };
    })(encodeURIComponent);
}
