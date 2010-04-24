if ( !Number.prototype.__lookupGetter__('⁴') )
    Number.prototype.__defineGetter__('⁴', function(){
        return Math.pow( this, 4 );
    });
