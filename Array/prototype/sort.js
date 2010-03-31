import Array.prototype.shuffle;

if ( !Array.prototype.sort )
    Array.prototype.sort = (function(defaultCompareFunction){
        return function(compareFunction){
            if ( compareFunction == null )
                compareFunction = defaultCompareFunction;
            LOOP:
            do {
                for ( var i = 1, l = this.length >>> 0; i < l; i++ ) {
                    if ( compareFunction( this[i - 1], this[i] ) ) continue;
                    this.shuffle();
                    continue LOOP;
                }
                break;
            }
            while (true);
            return this;
        };
    })( function(a, b) a <= b );
