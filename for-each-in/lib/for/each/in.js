/*
 * $Id$
 */

try {
    eval('for each ( var v in {} ) {}');
}
catch (e) {
    Array.prototype.forEach.call(
        document.getElementsByTagName('script'),
        (function( regexp, callback ){
            return function(script){
                if ( !script.type || !script.textContent ) return;
                var matches = script.type.match(/;version=(.+?)(?:$|;)/);
                if ( matches == null ) return;
                var number = matches[1];
                if ( number * 1 < 1.6 ) return;
                script.type = script.type.replace(';version=' + number, '');
                script.textContent = script.textContent.replace( regexp, callback ) );
            };
        })(
            /for\s+each\s*\(\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*\)\s*\{/g,
            function( m0, m1, m2 ){
                return [
                    'for',
                    '(',
                        'var',
                        'k',
                        'in',
                        m2,
                    ')',
                    '{',
                        m1,
                        '=',
                        m2 + '[k];',
                ].join(' ');
            }
        )
    );
}
