/*
 * $Id$
 */

if ( String.fromCharCode(0x10000).split('').length > 1 ) {
    String.prototype.split = (function(split){
        return function(separator, limit){
            var splits = [];
            for (var i = 0, l = this.length; i < l; i++)
                splits.push(
                    this[ this.charCodeAt(i) < 0x10000 ? i : ++i ]
                );
            return splits;
        };
    })( String.prototype.split );
}
