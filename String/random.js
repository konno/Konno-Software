if ( !String.random )
    String.random = function( n, base ){
        if ( !n )    n    = 0x80000000;
        if ( !base ) base = 36;
        return Math.floor( Math.random() * n ).toString(base);
    };
