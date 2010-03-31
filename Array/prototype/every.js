if ( !Array.prototype.every )
    Array.prototype.every = function( callback, thisObject ){
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        for ( var i = 0, l = this.length >>> 0; i < l; i++ )
            if ( i in this && !callback.call( thisObject, this[i], i, this ) )
                return false;
        return true;
    };
