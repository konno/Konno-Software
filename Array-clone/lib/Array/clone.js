/*
 * $Id$
 */

if ( !Array.prototype.clone ) {
    Array.prototype.clone = function(){
        return Array.apply( null, this );
    };
}
