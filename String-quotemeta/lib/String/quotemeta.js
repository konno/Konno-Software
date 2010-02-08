/*
 * $Id$
 */

if (!String.prototype.quotemeta) {
    String.prototype.quotemeta = (function(regexp, callback){
        return function(){
            return this.replace(regexp, callback);
        };
    })(/\W/g, function(m){ return '\\' + m });
}
