if ( !this.Filter )
    this.Filter = {};

if ( !this.__callback__ )
    this.__callback__ = {};

if ( !this.INC )
    this.INC = {};

if ( !this.__import__ )
    this.__import__ = function( package, callback ){
        if ( INC[package] ) {
            callback();
            return;
        }
        INC[package] = true;
        var randomNumber = Math.random();
        __callback__[randomNumber] = function(response){
            var src = response.body;
            Object.keys(Filter).forEach(function(x){
                src = Filter[x](src);
            });
            (function(){
                eval(src);
            })();
            callback();
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
                                  randomNumber,
                              ']',
                          ].join('')),
        ].join('&');
        document.body.appendChild(script);
    };

__import__('String.prototype.repeat', function(){
    if ( !Filter.import )
        Filter.import = function(src){
            var n = 0;
            var begin = '';
            src = src.replace(
                /import\s+(.+?);/g,
                function( m0, m1 ){
                    begin += '__import__("' + m1 + '", function(){ ';
                    n++;
                    return '';
                }
            );
            var end = ' })'.repeat(n);
            return begin + src.trim() + end + ';';
        };
    var $0 = 'http://konno.googlecode.com/svn/trunk/Filter/import.js';
    var scripts = document.getElementsByTagName('script');
    for ( var i = scripts.length - 1; i >= 0; i-- ) {
        var script = scripts[i];
        if ( script.src != $0 ) continue;
        eval( script.textContent = Filter.import( script.textContent ) );
        return;
    }
});
