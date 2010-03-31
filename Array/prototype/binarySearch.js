if ( !Array.prototype.binarySearch )
    Array.prototype.binarySearch = (function(defaultCompareFunction){
        return function( searchElement, compareFunction ){
            if ( !compareFunction )
                compareFunction = defaultCompareFunction;
            for ( var head = 0, tail = this.length -1, mid, cmp; head <= tail;
                  cmp < 0 ? ( tail = mid - 1 )
                          : ( head = mid + 1 ) ) {
                mid = ( head + tail ) >> 1;
                cmp = compareFunction( searchElement, mid );
                if ( !cmp ) return mid;
            }
            return -1;
        };
    })(function( a, b ){
        return a < b ? -1
             : a > b ?  1
             :          0;
    });
