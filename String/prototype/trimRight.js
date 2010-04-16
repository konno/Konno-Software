if ( !String.prototype.trimRight )
    String.prototype.trimRight = function(){
        return this.toString().replace(/\s+$/, '');
    };
