/*
 * import Math.gcd;
 */

if ( !Math.lcm ) Math.lcm = function(a, b) Math.abs(a * b) / Math.gcd(a, b);
