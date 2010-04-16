if ( !String.prototype.trim )
    String.prototype.trim = function(){
        return this.toString().replace(/^\s+|\s+$/, '');
    };
