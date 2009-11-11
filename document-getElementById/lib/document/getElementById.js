/*
 * $Id$
 */

if (!document.getElementById) {
    document.getElementById = function(id){
        return document.all[id];
    };
}
