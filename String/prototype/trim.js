if ( !String.prototype.trim )
    String.prototype.trim = (function(regexp){
        return function() this.replace(regexp, '');
    })(/^\s+|\s+$/g);
