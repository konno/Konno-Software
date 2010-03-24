if ( typeof __callback__ == 'undefined' )
    this.__callback__ = {};

if ( typeof require == 'undefined' )
    this.require = function( module, callback ){
        var randomNumber = Math.random();
        __callback__[randomNumber] = function(response){
            var src = response.body;
            if ( typeof Filter == 'undefined' )
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
