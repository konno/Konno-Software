/*
 * $Id$
 */

if ( String.fromCharCode(0x10000).length > 1 ) {
    this.length = function(str){
        var i = 0;
        Array.prototype.forEach.call(str, function(){
            i++;
        });
        return i;
    };
}
