/*
 * $Id$
 */

if (!Node.prototype.text) {
    Node.prototype.text = function(text){
        if (typeof(text) !== 'undefined') this.textContent = text;
        return this.textContent;
    };
}
