if ( !Object.prototype.p )
    Object.prototype.p = (function(){
        var puts     = this.console && console.log ? console.log
                     : this.alert                  ? alert
                     : this.print                  ? print
                     :                               function(){}
                     ;
        var toSource = this.JSON && JSON.stringify ? JSON.stringify
                     : Object.prototype.toSource   ? Object.prototype.toSource
                     :                               function(){}
                     ;
        return function(){
            puts( typeof this == 'function'
                ? this.toString()
                : toSource(this) );
        };
    })();
