(function($0){

if ( typeof String.prototype.repeat == 'undefined' )
    String.prototype.repeat = function(n){
        for ( var buf = '', s = this; n > 0;
              ( n & 1 ) && ( buf += s ),
              n >>>= 1, s += s );
        return buf;
    };

if ( typeof Filter == 'undefined' )
    this.Filter = {};

if ( typeof Filter.require == 'undefined' )
    Filter.require = function(src){
        var n = 0;
        var begin = '';
        src = src.replace(/require\s+(.+?);/g, function( m0, m1 ){
            begin += 'require("' + m1 + '", function(){ ';
            n++;
            return '';
        });
        var end = ' })'.repeat(n);
        return begin + src.trim() + end + ';';
    };

if ( typeof __callback__ == 'undefined' )
    this.__callback__ = {};

if ( typeof require == 'undefined' )
    this.require = function( module, callback ){
        var randomNumber = Math.random();
        __callback__[randomNumber] = function(response){
            var src = response.body;
            Object.keys(Filter).forEach(function(x){
                src = Filter[x](src);
            });
            eval(src);
            callback();
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
    };

var scripts = document.querySelectorAll('script');
for ( var i = scripts.length - 1; i >= 0; i-- ) {
    var script = scripts[i];
    if ( script.src != $0 ) continue;
    eval( script.textContent = Filter.require( script.textContent ) );
    break;
}

})('http://konno.googlecode.com/svn/trunk/Filter/require.js');
