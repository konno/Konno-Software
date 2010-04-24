if ( !Number.prototype.__lookupGetter__('⁻¹') )
    Number.prototype.__defineGetter__('⁻¹', function(){
        return 1 / this;
    });
