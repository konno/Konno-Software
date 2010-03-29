if ( !Function.prototype.body )
    Function.prototype.body = (function(regexp){
        return this.toString().match(regexp)[1];
    })(/\{\s*(.+?)\s*\}/);
