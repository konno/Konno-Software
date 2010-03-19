if ( !this.__callback__ )
    this.__callback__ = {};

if ( !this.require )
    this.require = function( module, callback ){
        var randomNumber = Math.random();
        __callback__[randomNumber] = function(response){
            var src = response.body;
            if ( this.Filter )
                Object.keys(Filter).forEach(function(x){
                    src = Filter[x](src);
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
        var object = module.replace(/\.(.+?)(?=\.|$)/g, function( m0, m1 ){
            return '["' + m1 + '"]';
        });
        var intervalID = window.setInterval(function(){
            if ( !eval(object) ) return;
            window.clearInterval(intervalID);
            callback();
        }, 0);
    };
