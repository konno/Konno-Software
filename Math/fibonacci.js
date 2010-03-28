if ( !Math.fibonacci )
    Math.fibonacci = function(n){
        return n < 2
             ? n
             : arguments.callee( n - 2 ) + arguments.callee( n - 1 );
    };
