if ( !String.prototype.repeat )
    String.prototype.repeat = function(){
        for ( var buf = '', s = this; n > 0;
              ( n & 1 ) && ( buf += s ),
              n >>>= 1, s += s );
        return buf;
    };
