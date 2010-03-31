if ( !Array.prototype.compare )
    Array.prototype.compare = function( anotherArray, compareFunction ){
        var l = this.length;
        if ( l != anotherArray.length )
            return false;
        if ( compareFunction == null )
            for ( var i = 0; i < l; i++ ) {
                if ( this[i] == anotherArray[i] ) continue;
                return false;
            }
        else if ( typeof compareFunction != 'function' )
            throw new TypeError( compareFunction + ' is not a function' );
        else
            for ( var i = 0; i < l; i++ ) {
                if ( compareFunction( this[i], anotherArray[i] ) ) continue;
                return false;
            }
        return true;
    };
