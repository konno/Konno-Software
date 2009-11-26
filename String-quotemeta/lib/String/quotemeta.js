/*
 * $Id$
 */

if ( !String.quotemeta ) {
    String.prototype.quotemeta = function(){
        return this.replace(/\W/g, function(m){
            return '\\' + m;
        });
    };
}
