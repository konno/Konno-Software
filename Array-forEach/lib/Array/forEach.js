/*
 * $Id$
 */

if ( !Array.prototype.forEach ) {
    Array.prototype.forEach = function(callback, thisObject){
        if (typeof callback != 'function')
            throw new TypeError();
        var i = 0;
        var l = this.length >>> 0;
        if (typeof this != 'string') {
            while (i < l) callback.call(thisObject, this[i++], i, this);
            return;
        }
        for (; i < l; i++) {
            callback.call(
                thisObject,
                this.charCodeAt(
                    this.charCodeAt(i) < 0x10000 ? i : ++i
                ),
                i,
                this
            );
        }
    };
}
