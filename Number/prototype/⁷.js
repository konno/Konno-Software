if ( !Number.prototype.__lookupGetter__('⁷') )
    Number.prototype.__defineGetter__('⁷', function(){
        return Math.pow( this, 7 );
    });
