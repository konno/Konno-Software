if ( !Object.prototype.p )
    Object.prototype.p = function(){
        var global = (function(){
            return this;
        })();
        (
            global.console && console.log ? function(s){
                                                return console.log(s);
                                            }
          : global.alert                  ? alert
          : global.print                  ? print
          :                                 function(){
                                                return this;
                                            }
        )
        (
            typeof this == 'function'     ? this.toString()
          : global.JSON && JSON.stringify ? JSON.stringify(this)
          : Object.prototype.toSource     ? this.toSource()
          :                                 this.toString()
        );
    };
