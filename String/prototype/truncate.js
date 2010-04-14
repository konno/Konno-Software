if ( !String.prototype.truncate )
    String.prototype.truncate = function(length){
        var str = this.toString();
        if ( !length ) length = str.length;
        return str.slice(0, length - 3) + '...';
    };
