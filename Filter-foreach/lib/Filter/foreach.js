/*
 * $Id$
 */

Array.prototype.forEach.call(
    document.getElementsByTagName('script'),
    (function( regexp, callback ){
        return function(script){
            var code = script.textContent;
            var type = script.type;
            if ( !type || !code ) return;
            var m = type.match(/;filter=foreach(?=$|;)/);
            if ( m == null ) return;
            script.type        = type.replace( m[0], '' );
            script.textContent = code.replace( regexp, callback );
            if ( /;filter=/(type) ) return;
            eval(code);
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
