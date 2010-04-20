if ( !String.prototype.ge )
    String.prototype.ge = function(anotherString){
        return this.toString().localeCompare(anotherString) >= 0;
    };
