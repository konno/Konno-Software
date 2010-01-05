/*
 * $Id$
 */

if (!String.prototype.empty) {
    String.prototype.empty = function(){
        return this == null
            || this == '';
    };
}
