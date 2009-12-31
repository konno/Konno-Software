/*
 * $Id$
 */

if ( String.fromCharCode(0x10000)
           .split('')
           .length > 1 ) {
    String.prototype.__split__
      = String.prototype.split;
    String.prototype.split
      = return function(separator, limit){
            var splits = [];
            for (var i = 0, l = this.length; i < l;
                 splits.push(
                     this[
                         this.charCodeAt(i) <
                         0x10000 ? i
                                 : ++i
                     ]
                 ),
                 i++);
            return splits;
        };
}
