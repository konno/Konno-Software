if ( !Math.factorial )
    Math.factorial = function(n){
        return n < 0 ? Number.NaN
             : n     ? Math.factorial(n - 1) * n
             :         1;
    };
