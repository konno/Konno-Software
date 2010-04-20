if ( !String.prototype.le )
    String.prototype.le = function(anotherString){
        return this.toString().localeCompare(anotherString) <= 0;
    };
