/*
 * import Math.gcd;
 */

if ( !Math.lcm )
    Math.lcm = function(a, b){
        return Math.abs(a * b) / Math.gcd(a, b);
    };
