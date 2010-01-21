/*
 * $Id$
 */

if (!Date.prototype.getMicroseconds) {
    Date.prototype.getMicroseconds = function(){
        return Math.floor( Math.random() * 1e3 );
    };
}
