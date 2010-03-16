if ( !Array.prototype.push )
    Array.prototype.push = function(){
        for ( var i = 0, l = arguments.length, begin = this.length; i < l;
              this[ begin + i ] = arguments[i++] );
        return this.length;
    };
