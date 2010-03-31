if ( !Array.prototype.indexOf )
    Array.prototype.indexOf = function( searchElement, fromIndex ){
        var length = this.length;
        fromIndex = Number(fromIndex);
        if ( isNaN(fromIndex) ) fromIndex = length - 1;
        else {
            fromIndex = Math[ fromIndex < 0 ? 'ceil' : 'floor' ](fromIndex);
            if      ( fromIndex <  0 )      fromIndex += length;
            else if ( fromIndex >= length ) fromIndex  = length - 1;
        }
        for ( ; fromIndex > -1; fromIndex-- )
            if ( fromIndex in this && this[fromIndex] == searchElement )
                return fromIndex;
        return -1;
    };
