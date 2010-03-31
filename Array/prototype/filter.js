if ( !Array.prototype.filter )
    Array.prototype.filter = function( callback, thisObject ){
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        var filteredArray = [];
        for ( var i = 0, l = this.length >>> 0; i < l;
              i in this
           && callback.call( thisObject, this[i], i, this )
           && filteredArray.push( this[i] ),
              i++ );
        return filteredArray;
    };
