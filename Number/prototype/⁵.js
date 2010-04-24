if ( !Number.prototype.__lookupGetter__('⁵') )
    Number.prototype.__defineGetter__('⁵', function(){
        return Math.pow( this, 5 );
    });
