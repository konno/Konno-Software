if ( !this.Filter )
    this.Filter = {};

if ( !Filter['function'] )
    Filter['function'] = function(src){
        return src.replace(
            /function\s*\(.*?\)\s*(?!{)(.+?)(?=;)/g,
            function( m0, m1 ){
                return 'function(){ return ' + m1 + ' }';
            }
        );
    };
