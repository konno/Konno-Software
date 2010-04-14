if ( !String.prototype.gt )
    String.prototype.gt = function(str){
        return this.toString().localeCompare(str) > 0;
    };
