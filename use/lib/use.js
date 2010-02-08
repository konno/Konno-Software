/*
 * $Id$
 */

if (!this.use) {
    this.use = function(src, type){
        var script  = document.createElement('script');
        script.type = type || 'application/javascript';
        script.src  = src;
        ( document.body ||
          document.getElementsByTagName('head')[0] )
                  .appendChild(script);
    };
}
