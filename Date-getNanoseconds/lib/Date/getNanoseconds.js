/*
 * $Id$
 */

if (!Date.prototype.getNanoseconds) {
    Date.prototype.getNanoseconds = function(){
        return Math.floor( Math.random() * 1e3 );
    };
}
