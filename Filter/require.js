(function(){

var script = Array.prototype.pop.call( document.querySelectorAll('script') );
alert( script.textContent );
script.textContent = script.textContent.replace(
    /require\s+(.+?)\s*(?:;|$)/g,
    function( m0, m1 ){
        var script  = document.createElement('script');
        script.type = 'application/javascript';
        script.src  = 'http://konno.googlecode.com/svn/trunk/'
                    + m1.replace(/\./g, '/')
                    + '.js';
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
