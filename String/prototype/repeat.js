if ( typeof String.prototype.repeat == 'undefined' )
    String.prototype.repeat = function(n){
        for ( var buf = '', s = this; n > 0;
              ( n & 1 ) && ( buf += s ),
              n >>>= 1, s += s );
        return buf;
    };
