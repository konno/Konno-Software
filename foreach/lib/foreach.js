/*
 * $Id$
 */

Array.prototype.forEach.call(
    document.getElementsByTagName('script'),
    (function( regexp, callback ){
        return function(script){
            if ( !script.type || !script.textContent ) return;
            var m = script.type.match(/;foreach=(.+?)(?=$|;)/);
            if ( m == null || !m[1] ) return;
            script.type =
              script.type.replace( m[0], '' );
            script.textContent =
              script.textContent.replace( regexp, callback );
        }
    })(
        /for(?:each)?\s+var\s+(.+?)\s*\(\s*([\s\S]+?)\s*\)\s*\{([\s\S]*?)\}/g,
        Array.prototype.forEach
      ? function( m0, m1, m2, m3 ){
            return m2 + '.forEach(function(' + m1 + '){' + m3 + '});';
        }
      : function( m0, m1, m2, m3 ){
            return [
                '(function(){',
                    'for',
                    '(',
                        'var',
                        'i',
                        '=',
                        '0,',
                        'l',
                        '=',
                        m2 + '.length;',
                        'i',
                        '<',
                        'l;',
                        'i++',
                    ')',
                    '{' + m3 + '}',
                '})();',
            ].join(' ');
        }
    )
);
