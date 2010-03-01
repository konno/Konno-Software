/*
 * $Id$
 */

if ( !Array.prototype.sort ) {
    Array.prototype.sort = function(compareFunction){
        if ( compareFunction == null ) {
            compareFunction = function( a, b ){
                return a < b;
            };
        }
        var l = this.length;
        if ( l < 2 ) return;
        LOOP:
        while (true) {
            for ( var i = 1; i < l; i++ ) {
                if ( !compareFunction( this[i - 1], this[i] ) ) {
                    this.shuffle();
                    continue LOOP;
                }
            }
            break;
        }
    };
}
