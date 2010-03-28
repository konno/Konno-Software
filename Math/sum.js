if ( !Math.sum )
    Math.sum = function(){
        return Array.prototype.reduce.call(arguments, function(a, b){
            return a + b;
        });
    };
