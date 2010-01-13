/*
 * $Id$
 */

if (!String.prototype.encodeEntities) {
    String.prototype.encodeEntities = (function(entity){
        return function(){
            var buf = '';
            Array.prototype
                 .forEach
                 .call(this, function(char){
                     buf += entity[char] || char;
                 });
            return buf;
        };
    })({
        '"': '&quot;',
        '&': '&amp;',
       '\'': '&apos;',
        '<': '&lt;',
        '>': '&gt;',
    });
}
