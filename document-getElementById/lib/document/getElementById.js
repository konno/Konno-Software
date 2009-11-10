/*
 * $Id$
 */

if (typeof(document['getElementById']) !== 'function') {
    document.getElementById = function(id){
        return document.all[id];
    };
}
