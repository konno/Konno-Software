/*
 * $Id$
 */

if ( String.fromCharCode(0x10000).length > 1 ) {
    var length = function(string){
        if ( string.charCodeAt(0) < 0x10000 )
            return string.length;
        
    };
}
