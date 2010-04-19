if ( !this.p )
    this.p = (function(){
        var puts = this.console &&
                        console.log ? function(str){
                                          return console.log(str);
                                      }
                 : this.alert       ? alert
                 : this.print       ? print
                 :                    function(){
                                          return this;
                                      }
                 ;
        return this.JSON &&
                    JSON.stringify       ? function(obj){
                                               puts(
                                                   typeof obj == 'function'
                                                 ? obj.toString()
                                                 : JSON.stringify(obj)
                                               );
                                           }
             : Object.prototype.toSource ? function(obj){
                                               puts(
                                                   typeof obj == 'function'
                                                 ? obj.toString()
                                                 : obj.toSource()
                                               );
                                           }
             :                             function(obj){
                                               puts( obj.toString() );
                                           }
             ;
    })();
