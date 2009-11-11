/*
 * $Id$.js 29 2009-11-11 09:48:17Z Konno.Software $
 */

if (!this.$) var $ = {};

$.id = (function(){
    var element = {};
    return function(id){
        if (element[id]) return element[id];
        element[id] = document.getElementById(id);
        return element[id];
    };
})();
