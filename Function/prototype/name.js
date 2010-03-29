if ( !Function.prototype.name )
    Function.prototype.name = (function(regexp){
        return function(){
            return this.toString().match(regexp)[1];
        };
    })(/function\s*(.*?)\s*\(/);
