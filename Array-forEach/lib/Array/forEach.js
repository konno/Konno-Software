/*
 * $Id$
 */

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisObject){
        if ( typeof callback != 'function' )
            throw new TypeError();
        for (var i = 0, l = this.length >>> 0; i < l;
             callback.call(
                 thisObject,
                 this[i++],
                 i,
                 this
             ));
    };
}

(function(){

var i = 0;
Array.prototype.forEach.call(
    String.fromCharCode(0x10000),
    function(){
        i++;
    }
);
if ( i == 1 ) return;
Array.prototype.__forEach__ = Array.prototype.forEach;
Array.prototype.forEach = function(callback, thisObject){
    if ( !(this instanceof String) ) {
        Array.prototype.__forEach__.apply( this, arguments );
        return;
    }
    if ( typeof callback != 'function' )
        throw new TypeError();
    for (var i = 0, l = this.length >>> 0; i < l;
         callback.call(
             thisObject,
             String.fromCharCode(
                 this.charCodeAt(
                     this.charCodeAt(i) < 0x10000 ? i : ++i
                 )
             ),
             i++,
             this
         ));
};

})();
