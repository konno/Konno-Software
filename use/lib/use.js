/*
 * $Id$
 */

function use(Module, VERSION, LIST){
    var script  = document.createElement('script');
    script.type = 'text/javascript' +
        VERSION ? ';version='       + VERSION
                : '';
    script.src  = Module.replace(/\./g, '/');
    document.body.appendChild(script);
}
