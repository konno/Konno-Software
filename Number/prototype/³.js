if ( !Number.prototype.__lookupGetter__('³') )
    Number.prototype.__defineGetter__('³', function(){
        return Math.pow( this, 3 );
    });
