import String.fromCharCode;

(function(c){

if ( c.charCodeAt(0) != c.charCodeAt(1) ) {
    String.prototype.__charCodeAt__ = String.prototype.charCodeAt;
    String.prototype.charCodeAt = function(index){
        var code = String.prototype
                         .__charCodeAt__
                         .call( this, index );
        return code >= 0xD800 &&
               code <= 0xDBFF ? 0x10000
                              + ( code - 0xD800 ) * 0x400
                              + (
                                    String.prototype
                                          .__charCodeAt__
                                          .call( this, index + 1 )
                                  - 0xDC00
                                )
             : code >= 0xDC00 &&
               code <= 0xDFFF ? 0x10000
                              + (
                                    String.prototype
                                          .__charCodeAt__
                                          .call( this, index - 1 )
                                  - 0xD800
                                ) * 0x400
                              + ( code - 0xDC00 )
             : code;
    };
}

})( String.fromCharCode(0x10000) );
