if ( !String.prototype.le )
    String.prototype.le = function(str){
        return this.localeCompare(str) <= 0;
    };
