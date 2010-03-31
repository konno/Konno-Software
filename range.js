if ( !this.range )
    this.range = function( begin, end, step ){
        if ( step == null )
            step = 1;
        else if ( !step )
            throw new RangeError('step must not be zero');
        if ( end == null )
            end = begin, begin = 0;
        var result = [];
        for ( ; step < 0 ? ( begin > end )
                         : ( begin < end );
              result.push(begin), begin += step );
        return result;
    };
