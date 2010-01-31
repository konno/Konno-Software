/*
 * $Id$
 */

if (!String.prototype.equalsIgnoreCase) {
    String.prototype.equalsIgnoreCase =
        function(anotherString){
            return this == anotherString
                || this.toUpperCase() ==
                     anotherString.toUpperCase()
                || this.toLowerCase() ==
                     anotherString.toLowerCase();
        };
}
