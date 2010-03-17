var JSONHttpRequest = { __callback__: {} };
(function(){

var src = 'http://konno.googlecode.com/svn/trunk/Filter/require.js';
var scripts = document.querySelectorAll('script');
var script = Array.prototype.pop.call(scripts);

if ( script.src != src )
    try {
        Array.prototype.forEach.call(
            Array.prototype.reverse.call(scripts),
            function(element){
                if ( element.src != src ) return;
                script = element;
                throw null;
            }
        );
    }
    catch (e) {}

script.textContent = script.textContent.replace(
    /require\s+(.+?)\s*(?:;|$)/g,
    function( m0, m1 ){
        var randomNumber = Math.random();
        JSONHttpRequest.__callback__[randomNumber] = function(response){
            eval( response.body );
        };
        var script  = document.createElement('script');
        script.type = 'application/javascript';
        script.src  = 'http://konno-freesoftware.appspot.com/get?' + [
            'uri='      + encodeURIComponent([
                              'http://konno.googlecode.com/svn/trunk/',
                              m1.replace(/\./g, '/'),
                              '.js',
                          ].join('')),
            'callback=' + encodeURIComponent([
                              'JSONHttpRequest.__callback__[',
                                  randomNumber,
                              ']',
                          ].join('')),
        ].join('&');
        document.body.appendChild(script);
        return '';
    }
);

script.textContent = [
    '(function(){',
        'var',
        'intervalID',
        '=',
        'window.setInterval(function(){',
            'try',
            '{',
                'eval("'
              + script.textContent
                      .trim()
                      .replace(/["\\]/g, function(m0){
                          return '\\' + m0;
                      })
              + '");',
            '}',
            'catch',
            '(e)',
            '{',
                'return;',
            '}',
            'window.clearInterval(intervalID);',
        '}, 0);',
    '})();',
].join(' ');

eval( script.textContent );

})();
