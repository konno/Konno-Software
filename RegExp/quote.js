if ( !RegExp.quote )
    RegExp.quote = (function( regexp, callback ){
        return function(str){
            return str.replace( regexp, callback );
        };
    })(/\W/g, function($0){
        return '\\' + $0;
    });
