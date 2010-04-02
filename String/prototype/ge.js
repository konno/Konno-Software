if ( !String.prototype.ge )
    String.prototype.ge = function(str){
        return this.localeCompare(str) >= 0;
    };
