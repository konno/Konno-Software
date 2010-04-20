if ( !String.prototype.lt )
    String.prototype.lt = function(anotherString){
        return this.toString().localeCompare(anotherString) < 0;
    };
