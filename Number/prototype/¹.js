if ( !Number.prototype.__lookupGetter__('¹') )
    Number.prototype.__defineGetter__('¹', function(){
        return Math.pow( this, 1 );
    });
