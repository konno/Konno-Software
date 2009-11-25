/*
 * $Id$
 */

if ( !this.XMLHttpRequest ) {
    var XMLHttpRequest = (function(){
        try {
            return (function(req){
                return req;
            })( new ActiveXObject('Msxml2.XMLHTTP.6.0') );
        } catch(e) {}
        try {
            return (function(req){
                return req;
            })( new ActiveXObject('Msxml2.XMLHTTP.3.0') );
        } catch(e) {}
        try {
            return (function(req){
                return req;
            })( new ActiveXObject('Msxml2.XMLHTTP') );
        } catch(e) {}
        try {
            return (function(req){
                return req;
            })( new ActiveXObject('Microsft.XMLHTTP') );
        } catch(e) {}
    })();
}
