/*
 * $Id$
 */

(function(str){

if ( str.charCodeAt(0) != str.charCodeAt(1) ) {
    String.prototype.charCodeAt = (function(charCodeAt){
        return function(index){
            var codeunit = charCodeAt.call(this, index);
            if (codeunit >= 0xD800 && codeunit <= 0xDBFF)
                return 0x10000
                     + (codeunit - 0xD800) * 0x400
                     + (charCodeAt.call(this, index + 1) - 0xDC00);
            if (codeunit >= 0xDC00 && codeunit <= 0xDFFF)
                return 0x10000
                     + (charCodeAt.call(this, index - 1) - 0xD800) * 0x400
                     + (codeunit - 0xDC00);
            return codeunit;
        };
    })(String.prototype.charCodeAt);
}

})( String.fromCharCode(0x10000) );
