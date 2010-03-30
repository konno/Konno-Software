import Math.factorial;

if ( !this.Filter )
    this.Filter = {};

if ( !Filter.factorial )
    Filter.factorial = function(src){
        return src.replace(
            /(\d+)!/g,
            function( m0, m1 ) {
                return Math.factorial( m1 * 1 );
            }
        );
    };
