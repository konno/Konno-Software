/*
 * $Id$
 */

if ( !Object.prototype.print ) {
    Object.prototype.print = (function(){
        return this.console && console.log ? function(){ console.log(this) }
             : this.alert                  ? function(){ alert(this) }
             : this.print                  ? function(){ print(this) }
             :                               function(){};
    })();
}
