if ( typeof Filter == 'undefined' )
    this.Filter = {};

if ( typeof Filter['function'] == 'undefined' )
    Filter['function'] = function(src){
        return src.replace(
            /function\s*\(\)\s*(?!{)(.+?)(?=;)/g,
            function( m0, m1 ){
                return 'function(){ return ' + m1 + '}';
            }
        );
    };
