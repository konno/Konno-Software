var callback = {};
eval(
    Array.prototype
         .pop
         .call(
             document.getElementsByTagName('script')
         )
         .textContent
         .replace(/require\s+(.+?)\s*?(?:;|$)/g, function( m0, m1 ){
             var random  = Math.random();
             var script  = document.createElement('script');
             script.type = 'application/javascript';
             script.src  = 'http://konno-freesoftware.appspot.com/'
                         + '?uri='
                         + encodeURIComponent(
                               'http://konno.googlecode.com/svn/trunk/'
                             + m1.replace(/\./g, '/')
                             + '.js'
                           )
                         + '&callback='
                         + 'callback[' + random + ']';
             document.body.appendChild(script);
         })
);
