if ( !RegExp.quote )
    RegExp.quote = (function( regexp, callback ){
        return function(str){
            return str.replace( regexp, callback );
        };
    })(/\W/g, function(m0){
        return '\\' + m0;
    });
