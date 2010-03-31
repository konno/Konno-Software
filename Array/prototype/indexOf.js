if ( !Array.prototype.indexOf )
    Array.prototype.indexOf = function( searchElement, fromIndex ){
        var length = this.length >>> 0;
        fromIndex = Number(fromIndex) || 0;
        fromIndex = Math[ fromIndex < 0 ? 'ceil' : 'floor' ](fromIndex);
        if ( fromIndex < 0 ) fromIndex += length;
        for ( ; fromIndex < length; fromIndex++ )
            if ( fromIndex in this && this[fromIndex] == searchElement )
                return fromIndex;
        return -1;
    };
