if ( !Math.gcd )
    Math.gcd = function(a, b){
        for ( var t; b; t = b, b = a % b, a = t );
        return a;
    };
