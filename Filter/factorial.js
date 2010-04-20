/*
 * import Math.factorial;
 */

if ( !this.Filter )
    this.Filter = {};

if ( !Filter.factorial )
    Filter.factorial = function(src){
        return src.replace(
            /(\d+)!/g,
            function( $0, $1 ) {
                return Math.factorial(+$1);
            }
        );
    };
