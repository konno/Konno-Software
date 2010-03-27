if ( !String.prototype.quote )
    String.prototype.quote = function(){
        return '"' + this + '"';
    };
