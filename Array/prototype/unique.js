if ( !Array.prototype.unique )
    Array.prototype.unique = function(){
        var object = {};
        this.forEach(function(key){
            object[key] = key;
        });
        return Object.keys(object).map(function(key){
            return object[key];
        });
    };
