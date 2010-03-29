import AssertionError;

if ( !this.assert )
    this.assert = function( expr, message ){
        if ( !expr ) throw new AssertionError(message);
        return true;
    };
