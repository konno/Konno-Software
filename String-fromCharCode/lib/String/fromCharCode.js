/*
 * $Id$
 */

(function(fromCharCode){

if ( String.fromCharCode(0x10000) != '\uD800\uDC00' ) {
    String.fromCharCode = function(){
        var str = '';
        Array.prototype.forEach.call(arguments, function(num){
            if (num < 0x10000) {
                str += fromCharCode(num);
                return;
            }
            num -= 0x10000;
            str += fromCharCode(
                0xD800 + (num >> 10),
                0xDC00 + (num & 0x3FF)
            );
        });
        return str;
    };
}

})(String.fromCharCode);
