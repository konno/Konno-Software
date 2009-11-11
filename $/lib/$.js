/*
 * $Id$
 */

var $ = (function(){
    var element = {};
    return function(id){
        if (element[id]) return element[id];
        element[id] = document.getElementById(id);
        return element[id];
    };
})();
