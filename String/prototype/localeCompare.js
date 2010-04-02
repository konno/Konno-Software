if ( !String.prototype.localeCompare )
    String.prototype.localeCompare = function(a, b){
        return a.charCodeAt(0) - b.charCodeAt(0);
    };
