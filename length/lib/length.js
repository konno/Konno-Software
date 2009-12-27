/*
 * $Id$
 */

if ( String.fromCharCode(0x10000).length > 1 ) {
    var length = function(string){
        for (var i = 0, l = string.length; i < l; i++)
            if ( string.charCodeAt(i) > 0xFFFF )
                i--;
        return i;
    };
}
