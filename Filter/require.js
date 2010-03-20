var __callback__ = {};

(function($0){

if ( !this.require )
    this.require = function( module, callback ){
        var object = module.replace(/\.(.+?)(?=\.|$)/g, function( m0, m1 ){
            return '["' + m1 + '"]';
        });
        if ( eval(object) != null ) {
            callback();
            return;
        }
        var randomNumber = Math.random();
        __callback__[randomNumber] = function(response){
            var src = response.body;
            if ( this.Filter )
                Object.keys(Filter).forEach(function(x){
                    var filter = Filter[x];
                    if ( !filter ) return;
                    src = filter(src);
                });
            eval(src);
        };
        var script  = document.createElement('script');
        script.type = 'application/javascript';
        script.src  = 'http://konno-freesoftware.appspot.com/get?' + [
            'uri='      + encodeURIComponent('http://' + [
                              'konno.googlecode.com',
                              'svn',
                              'trunk',
                              module.replace(/\./g, '/') + '.js',
                          ].join('/')),
            'callback=' + encodeURIComponent([
                              '__callback__[',
                                  randomNumber,
                              ']',
                          ].join('')),
        ].join('&');
        document.body.appendChild(script);
        var intervalID = window.setInterval(function(){
            if ( eval(object) == null ) return;
            window.clearInterval(intervalID);
            callback();
        }, 0);
    };

require('String.prototype.repeat', function(){
    if ( !this.Filter )
        this.Filter = {};

    if ( !Filter.require )
        Filter.require = function(src){
            var n = 0;
            var begin = '';
            src = src.replace(/require\s+(.+?);/g, function( m0, m1 ){
                begin += 'require("' + m1 + '", function(){ ';
                n++;
                return '';
            }).trim();
            var end = ' })'.repeat(n);
            return begin + src + end + ';';
        };

    var scripts = document.querySelectorAll('script');
    for ( var i = scripts.length - 1; i >= 0; i-- ) {
        var script = scripts[i];
        if ( script.src != $0 ) continue;
        eval( script.textContent = Filter.require( script.textContent ) );
        break;
    }
});

})('http://konno.googlecode.com/svn/trunk/Filter/require.js');
