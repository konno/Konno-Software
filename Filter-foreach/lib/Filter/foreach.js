/*
 * $Id$
 */

Array.prototype.forEach.call(
    document.getElementsByTagName('script'),
    (function( regexp, callback ){
        return function(script){
            if ( !script.type || !script.textContent ) return;
            var m = script.type.match(/;filter=foreach(?=$|;)/);
            if ( m == null ) return;
            script.type =
              script.type.replace( m[0], '' );
            eval( script.textContent =
                  script.textContent.replace( regexp, callback ) );
        }
    })(
        /for(?:each)?\s+var\s+(.+?)\s*\(\s*([\s\S]+?)\s*\)\s*\{([\s\S]*?)\}/g,
        function( m0, m1, m2, m3 ){
            return [
                'Array.prototype.forEach.call(',
                    m2,
                    ', ',
                    'function',
                    '(',
                        m1,
                    ')',
                    '{',
                        m3,
                    '}',
                ')',
                ';',
            ].join('');
        }
    )
);
