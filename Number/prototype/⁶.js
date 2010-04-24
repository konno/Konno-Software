if ( !Number.prototype.__lookupGetter__('⁶') )
    Number.prototype.__defineGetter__('⁶', function(){
        return Math.pow( this, 6 );
    });
