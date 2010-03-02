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
                var type = script.type;
                if ( !type ) return;
                try {
                    type.split(';').forEach(function(pair){
                        var splits = pair.split('=');
                        var key    = splits.shift();
                        var value  = splits.shift();
                        if ( key   != 'version' ||
                             value != '1.6' ) return;
                        throw null;
                    });
                    return;
                }
                catch (e) {}
                eval( script.textContent
                    = script.textContent.replace( regexp, callback ) );
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
                        m2 + '[k]',
                ].join(' ');
            }
        )
    );
}
