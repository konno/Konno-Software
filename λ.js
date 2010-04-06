if ( !this['λ'] )
    this['λ'] = function(){
        Array.prototype.push.call(
            arguments,
            'return ' + Array.prototype.pop.call(arguments)
        );
        return Function.apply( this, arguments );
    };
