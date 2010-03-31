if ( !String.prototype.trimLeft )
    String.prototype.trimLeft = (function(regexp){
        return function() this.replace(regexp, '');
    })(/^\s+/);
