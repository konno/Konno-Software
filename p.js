if ( !this.p )
    this.p = (function(){
        var puts = this.console &&
                        console.log ? function(s){
                                          return console.log(s);
                                      }
                 : this.alert       ? alert
                 : this.print       ? print
                 :                    function(){
                                          return this;
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
