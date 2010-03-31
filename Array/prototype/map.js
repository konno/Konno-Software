import Array.prototype.forEach;
import String.fromCharCode;

if ( !Array.prototype.map )
    Array.prototype.map = function( callback, thisObject ){
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        var mappedArray = [];
        for ( var i = 0, l = this.length >>> 0; i < l;
              i in this && mappedArray.push(
                  callback.call( thisObject, this[i], i, this )
              ),
              i++ );
        return mappedArray;
    };

if ( Array.prototype
          .map
          .call(
              String.fromCharCode(0x10000),
              function(c){ return c }
          )
          .length > 1 ) {
    Array.prototype.__map__ = Array.prototype.map;
    Array.prototype.map = function( callback, thisObject ){
        if ( !( this instanceof String ) )
            return Array.prototype.__map__.apply( this, arguments );
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        var mappedArray = [];
        var i = 0;
        Array.prototype.forEach.call(this, function(c){
            if ( i in this )
                mappedArray.push(
                    callback.call( thisObject, c, i, this )
                );
            i++;
        }, this)
        return mappedArray;
    };
}
