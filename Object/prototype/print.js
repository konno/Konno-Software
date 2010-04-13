if ( !Object.prototype.print )
    Object.prototype.print = (function(){
        return this.console ? function(){
                                  console.log( this.toString() );
                                  return true;
                              }
             : this.alert   ? function(){
                                  alert( this.toString() );
                                  return true;
                              }
             : this.print   ? function(){
                                  print( this.toString() );
                                  return true;
                              }
             :                function(){}
             ;
    })();
