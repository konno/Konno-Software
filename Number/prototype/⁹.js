if ( !Number.prototype.__lookupGetter__('⁹') )
    Number.prototype.__defineGetter__('⁹', function(){
        return Math.pow( this, 9 );
    });
