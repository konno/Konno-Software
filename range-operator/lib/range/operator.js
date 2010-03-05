/*
 * $Id$
 */

Array.prototype.forEach.call(
    document.getElementsByTagName('script'),
    (function( regexp, callback ){
        return function(script){
            if ( !script.type || !script.textContent ) return;
            var m = script.type.match(/;filter=range(?=$|;)/);
            if ( m == null ) return;
            script.type =
              script.type.replace( m[0], '' );
            script.textContent =
              script.textContent.replace( regexp, callback );
        }
    })(
        /([+-]?(?=\d|\.\d)\d*(?:\.\d*)?(?:e[+-]?\d+)?)\s*\.\.\s*([+-]?(?=\d|\.\d)\d*(?:\.\d*)?(?:e[+-]?\d+)?)/gi,
        function( m0, m1, m2 ){
            return [
                'range(',
                    m1 + ', ' + m2,
                ')',
            ].join(' ');
        }
    )
);
