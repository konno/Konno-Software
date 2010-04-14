if ( !String.prototype.localeCompare )
    String.prototype.localeCompare = function(str){
        return this.toString().charCodeAt(0) - str.charCodeAt(0);
    };
