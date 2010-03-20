(function($0){

if ( !String.prototype.hasOwnProperty('repeat') )
    String.prototype.repeat = function(n){
        for ( var buf = '', s = this; n > 0;
              ( n & 1 ) && ( buf += s ),
              n >>>= 1, s += s );
        return buf;
    };

if ( !this.hasOwnProperty('Filter') )
    this.Filter = {};

if ( !Filter.hasOwnProperty('require') )
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

if ( !this.hasOwnProperty('__callback__') )
    this.__callback__ = {};

if ( !this.hasOwnProperty('require') )
    this.require = function( module, callback ){
        var randomNumber = Math.random();
        __callback__[randomNumber] = function(response){
            var src = response.body;
            Object.keys(Filter).forEach(function(x){
                src = Filter[x](src);
            });
alert(src);
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
