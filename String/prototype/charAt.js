/*
 * import String.fromCharCode;
 * import Array.prototype.map;
 */

(function(c){

if ( c.charAt(0) != c ) {
    String.prototype.__charAt__ = String.prototype.charAt;
    String.prototype.charAt = function(index){
        return Array.prototype.map.call(this, function(c){
            return c;
        })[index];
    };
}

})( String.fromCharCode(0x10000) );
