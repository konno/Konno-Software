if ( !this.Filter )
    this.Filter = {};

if ( !Filter['function'] )
    Filter['function'] = function(src){
        return src.replace(
            /function\s*\(\s*(.*?)\s*\)\s*(?!{)(.+?)(?=;)/g,
            function( m0, m1, m2 ){
                return [
                    'function(',
                        m1,
                    '){',
                        'return',
                        m2,
                    '}',
                ].join(' ');
            }
        );
    };
