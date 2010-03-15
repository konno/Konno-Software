if ( !Object.prototype.toSource )
    Object.prototype.toSource = function() '(' + JSON.stringify(this) + ')';
