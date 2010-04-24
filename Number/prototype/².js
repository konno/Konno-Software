if ( !Number.prototype.__lookupGetter__('²') )
    Number.prototype.__defineGetter__('²', function(){
        return Math.pow( this, 2 );
    });
