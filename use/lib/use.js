/*
 * $Id$
 */

if (!this.use) {
    this.use = function(Module, VERSION){
        var script
          = document.createElement('script');
        script.type
          = 'application/javascript'
          + ( VERSION
            ? ';version=' + VERSION
            : '' )
        script.src
          = ( this.INC
            ? this.INC + '/'
            : '' )
          + Module.replace(/\./g, '/')
          + '.js';
        document.getElementsByTagName('head')[0]
                .appendChild(script);
    };
}
