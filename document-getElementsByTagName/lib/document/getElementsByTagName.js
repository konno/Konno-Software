/*
 * $Id$
 */

if (!document.getElementsByTagName) {
    document.getElementsByTagName = function(name){
        if (name == '*') return document.all;
        return Array.prototype.filter.call(
            document.all,
            function(element){
                return element.tagName == name;
            }
        );
    };
}
