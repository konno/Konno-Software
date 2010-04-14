if ( !String.prototype.chomp )
    String.prototype.chomp = (function(regexp){
        return function() this.toString().replace( regexp, '' );
    })(/\n$/);
