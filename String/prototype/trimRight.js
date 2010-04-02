if ( !String.prototype.trimRight )
    String.prototype.trimRight = (function(regexp){
        return function() this.toString().replace( regexp, '' );
    })(/\s+$/);
