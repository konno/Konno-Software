/*
 * $Id$
 */

if ( String.fromCharCode(0x10000).length > 1 ) {
    var length = function(str){
        for (var i = 0, l = str.length; i < l; i++)
            if ( str.charCodeAt(i) > 0xFFFF )
                i--;
        return i;
    };
}
