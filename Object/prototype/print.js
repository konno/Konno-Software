if ( !Object.prototype.print )
    Object.prototype.print = (function(){
        var puts = this.console &&
                        console.log ? function(str){
                                          return console.log(str);
                                      }
                 : this.alert       ? alert
                 : this.print       ? print
                 :                    function(str){
                                          return str;
                                      }
                 ;
        return this.JSON &&
                    JSON.stringify       ? function(){
                                               puts(
                                                   typeof this == 'function'
                                                 ? this.toString()
                                                 : JSON.stringify(this)
                                               );
                                           }
             : Object.prototype.toSource ? function(){
                                               puts(
                                                   typeof this == 'function'
                                                 ? this.toString()
                                                 : this.toSource()
                                               );
                                           }
             :                             function(){
                                               puts( this.toString() );
                                           }
             ;
    })();
