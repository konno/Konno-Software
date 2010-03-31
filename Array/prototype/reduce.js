if ( !Array.prototype.reduce )
    Array.prototype.reduce = (function(){
        var __message__ = 'reduce of empty array with no initial value';
        return function( callback, initialValue ){
            if ( typeof callback != 'function' )
                throw new TypeError( callback + ' is not a function' );
            var argc = arguments.length;
            var l = this.length >>> 0;
            if ( !l && argc < 2 )
                throw new TypeError(__message__);
            var i = 0;
            var result;
            if ( argc >= 2 ) result = initialValue;
            else
                do {
                    if ( i++ in this ) {
                        result = this[i];
                        break;
                    }
                    if ( i < l ) continue;
                    throw new TypeError(__message__);
                }
                while (true);
            for ( ; i < l; i++ )
                if ( i in this )
                    result = callback.call( null, result, this[i], i, this );
            return result;
        };
    })();
