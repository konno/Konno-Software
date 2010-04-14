if ( !String.prototype.ge )
    String.prototype.ge = function(str){
        return this.toString().localeCompare(str) >= 0;
    };
