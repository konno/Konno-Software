if ( !Number.prototype.__lookupGetter__('⁸') )
    Number.prototype.__defineGetter__('⁸', function(){
        return Math.pow( this, 8 );
    });
