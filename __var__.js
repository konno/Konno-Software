if ( !this.__var__ )
    this.__var__ = function(name){
        var caller = arguments.callee.caller;
        var tmp;
        while ( tmp = caller.caller ) caller = tmp;
        return caller.toString().match(
                   new RegExp([
                       'var',
                       name,
                       '=',
                       '(.+?);',
                   ].join('\\s+'))
               )[1];
    };
