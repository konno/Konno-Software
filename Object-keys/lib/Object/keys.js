/*
 * $Id$
 */

if ( !Object.keys ) {
    Object.keys = function(o){
        var props = new Array();
        for ( var p in o ) props.push(p);
        return props;
    };
}
