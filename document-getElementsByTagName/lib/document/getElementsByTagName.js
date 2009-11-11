/*
 * $Id$
 */

if (!document.getElementsByTagName) {
    document.getElementsByTagName = function(name){
        return name == '*'
          ? document.all
          : Array.prototype.filter.call(
                document.all,
                function(element){
                    return element.tagName == name;
                }
            );
    };
}
