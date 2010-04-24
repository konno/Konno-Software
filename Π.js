if ( !this.Π )
    this.Π = function( from, to, f ){
        var product = 1;
        for ( var x = from; x <= to; product *= f( x++, product ) );
        return product;
    };
