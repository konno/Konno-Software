/*
 * $Id$
 */

if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function(){
        for (var t, r, i = this.length; i;
             r = Math.floor( Math.random() * i ),
             t = this[--i], this[i] = this[r], this[r] = t);
        return this;
    };
}
