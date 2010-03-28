if ( !this.Filter )
    this.Filter = {};

if ( !this.__callback__ )
    this.__callback__ = {};

if ( !this.INC )
    this.INC = {};

if ( !this.__import__ )
    this.__import__ = (function(node){
        return function( package, callback ){
            if ( INC[package] ) {
                callback();
                return;
            }
            var id = Math.random();
            __callback__[id] = function(response){
                var src = response.body
                        + '(' + callback.toString() + ')();';
                Object.keys(Filter).forEach(function(x){
                    src = Filter[x](src);
                });
                (function(){
                    try {
                        eval(src);
                    }
                    catch (e) {
                        throw e + ': ' + src;
                    }
                })();
                INC[package] = true;
            };
            var script  = document.createElement('script');
            script.type = 'application/javascript';
            script.src  = 'http://konno-freesoftware.appspot.com/get?' + [
                'uri='      + encodeURIComponent('http://' + [
                                  'konno.googlecode.com',
                                  'svn',
                                  'trunk',
                                  package.replace(/\./g, '/') + '.js',
                              ].join('/')),
                'callback=' + encodeURIComponent([
                                  '__callback__[',
                                      id,
                                  ']',
                              ].join('')),
            ].join('&');
            node.appendChild(script);
        };
    })( document.body ||
        document.getElementsByTagName('head')[0] );

__import__('String.prototype.repeat', function(){
    if ( !Filter.import )
        Filter.import = /*(function( regexp, callback ){
            return */function(src){
                var n = 0;
                var begin = '';
                src = src.replace(
                    /import\s+(.+?);/g,
                    function( m0, m1 ){
                        begin += '__import__("' + m1 + '", function(){\n';
                        n++;
                        return '';
                    }
                );
                var end = '\n});'.repeat(n);
                return [
                    begin,
//                    'eval("',
                        src.trim()/*
                           .replace( regexp, callback )*/,
//                    '")',
                    end,
                ].join('');
            };/*
        })(
            /[\b\f\n\r\t\v'"\\]/g,
            (function(char){
                return function(m0){
                    return '\\' + ( char[m0] || m0 );
                };
            })({
                '\b': 'b',
                '\f': 'f',
                '\n': 'n',
                '\r': 'r',
                '\t': 't',
                '\v': 'v',
            })
        );*/
    var $0 = 'http://konno.googlecode.com/svn/trunk/Filter/import.js';
    var scripts = document.getElementsByTagName('script');
    for ( var i = 0, l = scripts.length; i < l; i++ ) {
        var script = scripts[i];
        if ( script.src != $0 ) continue;
        script.removeAttribute('src');
        var src = script.textContent;
        if ( !src ) return;
        script.textContent = src = Filter.import(src);
        try {
            eval(src);
        }
        catch (e) {
            throw e + ': ' + src;
        }
        return;
    }
});
