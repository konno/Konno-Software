/*
 * $Id$
 */

function use(Module, VERSION, LIST){
    window.addEventListener('load', function(){
        var script  = document.createElement('script');
        script.type = 'text/javascript' +
          ( VERSION ? ';version='       + VERSION
                    : '' )
        script.src  = Module.replace(/\./g, '/') + '.js';
        document.body.appendChild(script);
    }, false);
}
