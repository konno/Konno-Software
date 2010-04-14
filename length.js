import Array.prototype.forEach;
import String.fromCharCode;

if ( String.fromCharCode(0x10FFFF).length > 1 )
    this.length = function(str){
        var i = 0;
        Array.prototype.forEach.call(str, function(){
            i++;
        });
        return i;
    };
