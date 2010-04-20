if ( !this.Filter )
    this.Filter = {};

if ( !Filter['function'] )
    Filter['function'] = function(src){
        return src.replace(
            /function\s*\(\s*(.*?)\s*\)\s*(?!{)(.+?)(?=;)/g,
            function( $0, $1, $2 ){
                return [
                    'function(',
                        $1,
                    '){',
                        'return',
                        $2,
                    '}',
                ].join(' ');
            }
        );
    };
