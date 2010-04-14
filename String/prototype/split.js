/*
 * import RegExp.quote;
 * import Array.prototype.map;
 * import String.fromCharCode;
 */

if ( String.fromCharCode(0x10FFFF).split('').length > 1 ) {
    String.prototype.__split__ = String.prototype.split;
    String.prototype.split = function( sep, limit ){
        var str = this.toString();
        return limit != null && !limit
             ? []
             : str.indexOf(sep) < 0
             ? [str]
             : sep == ''
             ? Array.prototype.map.call(
                   str,
                   function(c){
                       return c;
                   }
               ).slice(
                   0,
                   limit == null ||
                   limit < 0
                 ? str.length
                 : limit
               )
             : JSON.parse([
                   '[',
                       '"',
                           str.replace(
                               new RegExp( RegExp.quote(sep), 'g' ),
                               '", "'
                           ),
                       '"',
                   ']',
               ].join('')).slice(
                   0,
                   limit == null ||
                   limit < 0
                 ? str.length
                 : limit
               );
    };
}
