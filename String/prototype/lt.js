if ( !String.prototype.lt )
    String.prototype.lt = function(str){
        return this.localeCompare(str) < 0;
    };
