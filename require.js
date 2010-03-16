if ( !this.require )
    this.require = function(string){
        var script  = document.createElement('script');
        script.type = 'application/javascript';
        script.src  = 'http://konno.googlecode.com/svn/trunk/'
                    + string.replace(/\./g, '/')
                    + '.js';
        document.body.appendChild(script);
    };
