if ( !this.Σ )
    this.Σ = function( from, to, f ){
        var sum = 0;
        for ( var x = from; x <= to; sum += f( x++, sum ) );
        return sum;
    };
