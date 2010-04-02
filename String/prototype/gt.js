if ( !String.prototype.gt )
    String.prototype.gt = function(str){
        return this.localeCompare(str) > 0;
    };
