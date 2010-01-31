/*
 * $Id$
 */

if (!Object.prototype.toSource) {
    Object.prototype.toSource = function(){
        return JSON.stringify(this);
    };
}
