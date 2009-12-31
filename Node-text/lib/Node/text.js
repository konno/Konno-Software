/*
 * $Id$
 */

if (!Node.prototype.text) {
    Node.prototype.text = function(text){
        return text == null
           ?   this.textContent
           : ( this.textContent = text );
    };
}
