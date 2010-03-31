if ( !String.prototype.trimRight )
    String.prototype.trimRight = (function(regexp){
        return function() this.replace(regexp, '');
    })(/\s+$/);
