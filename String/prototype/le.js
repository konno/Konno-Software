if ( !String.prototype.le )
    String.prototype.le = function(str){
        return this.toString().localeCompare(str) <= 0;
    };
