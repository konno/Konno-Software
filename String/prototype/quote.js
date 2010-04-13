if ( !String.prototype.quote )
    String.prototype.quote = function() JSON.stringify(this);
