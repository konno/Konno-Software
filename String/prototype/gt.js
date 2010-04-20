if ( !String.prototype.gt )
    String.prototype.gt = function(anotherString){
        return this.toString().localeCompare(anotherString) > 0;
    };
