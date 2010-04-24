if ( !this.__var__ )
    this.__var__ = function(name){
        return arguments.callee
                        .caller
                        .toString()
                        .match(
                            new RegExp([
                                'var',
                                name,
                                '=',
                                '(.+?);',
                            ].join('\\s+'))
                        )[1];
    };
