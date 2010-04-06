if ( !this.lambda )
    this.lambda = function(){
        Array.prototype.push.call(
            arguments,
            'return ' + Array.prototype.pop.call(arguments)
        );
        return Function.apply( this, arguments );
    };
