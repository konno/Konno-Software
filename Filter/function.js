if ( !this.Filter )
    this.Filter = {};

if ( !Filter['function'] )
    try {
        eval('function() null');
        Filter['function'] = false;
    }
    catch (e) {
        Filter['function'] = function(src){
            return src.replace(
                /function\s*\(\)\s*(?!{)(.+?)(?=;)/g,
                function( m0, m1 ){
                    return 'function(){ return ' + m1 + '}';
                }
            );
        };
    }
