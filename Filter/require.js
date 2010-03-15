eval(
    Array.prototype
         .pop
         .call(
             document.getElemenetsByTagName('script')
         )
         .textContent
         .replace(/require\s+(.+?)\s*?(?:;|$)/g, function( m0, m1 ){
             var req = new JSONHttpRequest();
             req.open('GET', 'http://konno-freesoftware.appspot.com/get');
         })
);
