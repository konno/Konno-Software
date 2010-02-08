/*
 * $Id$
 */

if ( String.fromCharCode(0x10000) != '\uD800\uDC00' ) {
    String.__fromCharCode__ = String.fromCharCode;
    String.fromCharCode = function(){
        var str = '';
        Array.prototype
             .forEach
             .call(arguments, function(num){
                 if ( num < 0x10000 ) {
                     str += String.__fromCharCode__
                                  .apply( this, arguments );
                     return;
                 }
                 num -= 0x10000;
                 str += String.__fromCharCode__(
                     0xD800 + ( num >> 10 ),
                     0xDC00 + ( num & 0x3FF )
                 );
             });
        return str;
    };
}
