/*
 * $Id$
 */

(function(str){

if ( str.charCodeAt(0) != str.charCodeAt(1) ) {
    String.prototype.__charCodeAt__
      = String.prototype.charCodeAt;
    String.prototype.charCodeAt
      = function(index){
            var codeunit
              = String.prototype
                      .__charCodeAt__
                      .call(this, index);
            return codeunit >= 0xD800 &&
                   codeunit <= 0xDBFF ? 0x10000
                                      + (codeunit - 0xD800) * 0x400
                                      + (
                                            String.prototype
                                                  .__charCodeAt__
                                                  .call(
                                                      this,
                                                      index + 1
                                                  )
                                          - 0xDC00
                                        )
                 : codeunit >= 0xDC00 &&
                   codeunit <= 0xDFFF ? 0x10000
                                      + (
                                            String.prototype
                                                  .__charCodeAt__
                                                  .call(
                                                      this,
                                                      index - 1
                                                  )
                                          - 0xD800
                                        ) * 0x400
                                      + (codeunit - 0xDC00);
                 : codeunit;
        };
}

})( String.fromCharCode(0x10000) );
