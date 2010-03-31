if ( !Array.prototype.rotate )
    Array.prototype.rotate = function(n){
        var l = this.length;
        if ( l < 2 || !n ) return this;
        n %= l;
        if ( n < 0 )
            this.push
                .apply( this, this.splice( 0, -n ) );
        else
            this.unshift
                .apply( this, this.splice( -n, n ) );
        return this;
    };
