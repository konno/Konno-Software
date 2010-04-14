/*
 * import String.prototype.charCodeAt;
 * import String.fromCharCode;
 */

if ( !Array.prototype.forEach )
    Array.prototype.forEach = function( callback, thisObject ){
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        for ( var i = 0, l = this.length >>> 0; i < l;
              i in this && callback.call( thisObject, this[i], i, this ),
              i++ );
    };

(function(i){
    Array.prototype.forEach.call(
        String.fromCharCode(0x10000),
        function(){ i++ }
    );
    if ( i == 1 ) return;
    Array.prototype.__forEach__ = Array.prototype.forEach;
    Array.prototype.forEach = function( callback, thisObject ){
        if ( !( this instanceof String ) ) {
            Array.prototype.__forEach__.apply( this, arguments );
            return;
        }
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        for ( var i = 0, l = this.length >>> 0; i < l;
              i in this && callback.call(
                  thisObject,
                  this.charCodeAt(i) < 0x10000
                ? this[i]
                : String.fromCharCode( this.charCodeAt(i++) ),
                  i,
                  this
              ),
              i++ );
    };
})(0);
