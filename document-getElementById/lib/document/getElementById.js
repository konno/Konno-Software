/*
 * $Id$
 */

if ( !document.getElementById ) {
    document.getElementById = (function(){
        return document.all
             ? function(id){ return document.all[id] }
             : function(id){
                   return Array.prototype.filter.call(
                       document.getElementsByTagName('*'),
                       function(element){
                           return element.id == id;
                       }
                   );
               };
    })();
}
