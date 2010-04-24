/*
 * import Math.factorial;
 */

if ( !Number.prototype.__lookupGetter__('!') )
    Number.prototype.__defineGetter__('!', function(){
        return Math.factorial( this.valueOf() );
    });
