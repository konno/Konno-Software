/*
 * import Math.SQRT5;
 * import Math.PHI;
 */

if ( !Math.fibonacci )
    Math.fibonacci = function(n){
        return n < 0
             ? Math.pow( -1, 1 - n ) * Math.fibonacci(-n)
             : Math.floor( Math.pow( Math.PHI, n ) / Math.SQRT5 + 0.5 );
    };
