if ( !this.approve )
    this.approve = function( message, callback ){
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        if ( !confirm(message) ) return;
        callback();
    };
