/*
 * $Id$
 */

if (!this.$E) {
    this.$E = function(){
        return document.createElement
                       .apply(this, arguments);
    };
}
