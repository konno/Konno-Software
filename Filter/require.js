eval(
    Array.prototype
         .pop
         .call(
             document.getElementsByTagName('script')
         )
         .textContent
         .replace(/require\s+(.+?)\s*?(?:;|$)/g, function( m0, m1 ){
             alert(m1);
         })
);
