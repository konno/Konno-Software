/*
 * $Id$
 */

Array.prototype.forEach.call(
    document.getElementsByTagName('script'),
    (function( regexp, callback ){
        return function(script){
            if ( !script.type || !script.textContent ) return;
            var m = script.type.match(/;filter=factorial(?=$|;)/);
            if ( m == null ) return;
            script.type =
              script.type.replace( m[0], '' );
            script.textContent =
              script.textContent.replace( regexp, callback );
            if ( /;filter=/( script.type ) ) return;
            eval( script.textContent );
        }
    })(
        /\+?(\d+)!/g,
        function( m0, m1 ){
            return Math.factorial(m1);
        }
    )
);
