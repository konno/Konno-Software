if ( !Array.prototype.repeat )
    Array.prototype.repeat = function(n){
        for ( var buf = [], a = this; n > 0;
              ( n & 1 ) && ( buf = buf.concat(a) ),
              n >>>= 1, a = a.concat(a) );
        return buf;
    };
