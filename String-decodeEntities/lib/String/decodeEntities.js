/*
 * $Id$
 */

if (!String.prototype.decodeEntities) {
    String.prototype.decodeEntities = (function(){
        var regexp = /&(?:(?:[gl]|quo)t|a(?:pos|mp));/g;
        var char   = {
            '&quot;':  '"',
            '&amp;' :  '&',
            '&apos;': '\'',
            '&lt;'  :  '<',
            '&gt;'  :  '>',
        };
        var callback = function(entity){
            return char[entity];
        };
        return function(){
            return this.replace(regexp, callback);
        };
    })();
}
