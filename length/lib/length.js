/*
 * $Id$
 */

if ( String.fromCharCode(0x10000).length > 1 ) {
    this.length = function(str){
        for (var i = 0, l = str.length; i < l;
             str.charCodeAt(i) < 0x10000 && i++);
        return i;
    };
}
