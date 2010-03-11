/*
 * $Id$
 */

if ( !Math.factorial ) {
    Math.factorial = function(n){
        return n < 0 ? Number.NaN
             : n     ? n * arguments.callee( n - 1 )
             :         1;
    };
}
