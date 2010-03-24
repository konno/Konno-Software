(function($0){

if ( !String.prototype.repeat )
    String.prototype.repeat = function(n){
        for ( var buf = '', s = this; n > 0;
              ( n & 1 ) && ( buf += s ),
              n >>>= 1, s += s );
        return buf;
    };

if ( !this.Filter )
    this.Filter = {};

if ( !Filter.require )
    Filter.require = function(src){
console.log(src);
        var n = 0;
        var begin = '';
        src = src.replace(/require\s+(.+?);/g, function( m0, m1 ){
            begin += 'require("' + m1 + '", function(){ ';
            n++;
            return '';
        });
        var end = ' })'.repeat(n);
        return begin + src.trim() + end;
    };

if ( !this.__callback__ )
    this.__callback__ = {};

if ( !this.require )
    this.require = function( module, callback ){
console.log(module);
console.log(callback);
        var randomNumber = Math.random();
        __callback__[randomNumber] = function(response){
            var src = response.body;
console.log(src);
            Object.keys(Filter).forEach(function(x){
                src = Filter[x](src);
            });
console.log(src);
            eval(src);
console.log(this);
eval('if ( !this.$ ) this.$ = (function(element){ return function( selectors, flag ){ return !flag && element[selectors] || ( element[selectors] = document.querySelector(selectors) ); }; })({});');
console.log($);
console.log(callback);
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
console.log( script.src );
        document.body.appendChild(script);
    };

var scripts = document.querySelectorAll('script');
for ( var i = scripts.length - 1; i >= 0; i-- ) {
    var script = scripts[i];
    if ( script.src != $0 ) continue;
console.log( script.textContent );
    script.textContent = Filter.require( script.textContent );
console.log( script.textContent );
    eval( script.textContent );
    break;
}

})('http://konno.googlecode.com/svn/trunk/Filter/require.js');
