eval(
    Array.prototype
         .pop
         .call(
             document.getElementsByTagName('script')
         )
         .textContent
         .replace(/require\s+(.+?)\s*?(?:;|$)/g, function( m0, m1 ){
             var script  = document.createElement('script');
             script.type = 'application/javascript';
             script.src  = 'http://konno.googlecode.com/svn/trunk/'
                         + m1.replace(/\./g, '-')
                         + '.js';
             document.body.appendChild(script);
         })
);
