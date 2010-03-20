if ( !Object.prototype.hasOwnProperty('toSource') )
    Object.prototype.toSource = function() '(' + JSON.stringify(this) + ')';
