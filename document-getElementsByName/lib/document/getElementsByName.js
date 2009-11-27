/*
 * $Id$
 */

if ( !document.getElementsByName ) {
    document.getElementsByName = function(name){
        return Array.prototype.filter.call(
            document.getElementsByTagName('*'),
            function(element){
                return element.name == name;
            }
        );
    };
}
