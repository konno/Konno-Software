if ( !String.prototype.trimLeft )
    String.prototype.trimLeft = function(){
        return this.toString().replace(/^\s+/, '');
    };
