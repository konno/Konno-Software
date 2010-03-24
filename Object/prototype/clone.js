if ( !Object.prototype.clone )
    Object.prototype.clone = function() JSON.parse( JSON.stringify(this) );
