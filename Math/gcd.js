if ( !Math.gcd ) {
    Math.gcd = function(a, b){
        return b
             ? arguments.callee(b, a % b)
             : Math.abs(a);
    };
