/*
 * require String.fromCharCode;
 */

if ( String.prototype.constructor('\U00010000') !=
     String.fromCharCode(0x10000) ) {
    String.prototype.__constructor__ = String.prototype.constructor;
    String.prototype.constructor = function(str){
        return str.replace(/\U(\d{8})/g, function( m0, m1 ){
            return String.fromCharCode( parseInt( m1, 16 ) );
        });
    };
}
