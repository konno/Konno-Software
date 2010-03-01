/*
 * $Id$
 */

if ( !Array.prototype.unique ) {
    Array.prototype.unique = function(){
        var a = [];
        var o = {};
        this.forEach(function(k){
            o[k] = true;
        });
        for ( var k in o ) a.push(k);
        return a;
    };
}
