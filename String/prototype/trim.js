if ( !String.prototype.trim )
    String.prototype.trim = (function(regexp){
        return function() this.toString().replace( regexp, '' );
    })(/^\s+|\s+$/g);
