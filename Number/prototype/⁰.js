if ( !Number.prototype.__lookupGetter__('⁰') )
    Number.prototype.__defineGetter__('⁰', function(){
        return Math.pow( this, 0 );
    });
