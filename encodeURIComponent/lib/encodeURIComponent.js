/*
 * $Id$
 */

(function(str){

if ( decodeURIComponent( encodeURIComponent(str) ) != str ) {
    alert(1);
}

})('\uD800\uDC00');
