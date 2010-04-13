if ( !Object.prototype.print )
    Object.prototype.print = (function(){
        return this.console ? function(){
                                  console.log( this.toString() );
                              }
             : this.alert   ? function(){
                                  alert( this.toString() );
                              }
             : this.print   ? function(){
                                  print( this.toString() );
                              }
             :                function(){}
             ;
    })();
