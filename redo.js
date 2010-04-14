if ( !this.redo )
    this.redo = function() arguments.callee.caller.apply( this, arguments );
