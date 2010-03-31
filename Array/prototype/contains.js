if ( !Array.prototype.contains )
    Array.prototype.contains = function(searchElement){
        return this.indexOf(searchElement) >= 0;
    };
