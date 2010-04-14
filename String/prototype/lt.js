if ( !String.prototype.lt )
    String.prototype.lt = function(str){
        return this.toString().localeCompare(str) < 0;
    };
