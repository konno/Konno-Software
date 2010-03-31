import RegExp.quote;
import Array.prototype.map;
import String.fromCharCode;

if ( String.fromCharCode(0x10000).split('').length > 1 ) {
    String.prototype.__split__ = String.prototype.split;
    String.prototype.split = function( sep, limit ){
        return limit != null && !limit
             ? []
             : this.indexOf(sep) < 0
             ? [this]
             : sep == ''
             ? Array.prototype.map.call(
                   this,
                   function(c){
                       return c;
                   }
               ).slice(
                   0,
                   limit == null ||
                   limit < 0
                 ? this.length
                 : limit
               )
             : JSON.parse([
                   '[',
                       '"',
                           this.replace(
                               new RegExp( RegExp.quote(sep), 'g' ),
                               '", "'
                           ),
                       '"',
                   ']',
               ].join('')).slice(
                   0,
                   limit == null ||
                   limit < 0
                 ? this.length
                 : limit
               );
    };
}
