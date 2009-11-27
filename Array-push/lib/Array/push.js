/*
 * $Id$
 */

if ( !Array.prototype.push ) {
    Array.prototype.push = function(){
        var idx = this.length;
        for (var i = 0, l = arguments.length; i < l; i++)
            this[ idx + i ] = arguments[i];
        return this.length;
    };
}
