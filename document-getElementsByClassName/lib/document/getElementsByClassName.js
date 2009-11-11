/*
 * $Id$
 */

if (!document.getElementsByClassName) {
    document.getElementsByClassName = function(name){
        return Array.prototype.filter.call(
            document.getElementsByTagName('*'),
            function(element){
                return element.className == name;
            }
        );
    };
}
