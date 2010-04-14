if ( !String.prototype.isEmpty )
    String.prototype.isEmpty = function() !this.toString().length;
