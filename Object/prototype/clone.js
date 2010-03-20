if ( !Object.prototype.hasOwnProperty('clone') )
    Object.prototype.clone = function() JSON.parse( JSON.stringify(this) );
