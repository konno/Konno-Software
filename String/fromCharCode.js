if ( String.fromCharCode(0x10000) != '\uD800\uDC00' ) {
    String.__fromCharCode__ = String.fromCharCode;
    String.fromCharCode = function(){
        var buf = '';
        for ( var i = 0, l = arguments.length; i < l; i++ ) {
            var n = arguments[i];
            if ( n < 0x10000 ) {
                buf += String.__fromCharCode__(n);
                continue;
            }
            n -= 0x10000;
            buf += String.__fromCharCode__(
                0xD800 + ( n >> 10 ),
                0xDC00 + ( n & 0x3FF )
            );
        }
        return buf;
    };
}
