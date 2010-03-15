eval(
    Array.prototype
         .pop
         .call(
             document.getElemenetsByTagName('script')
         )
         .textContent
         .replace(/require\s+(.+?)\s*?(?:;|$)/g, function( m0, m1 ){
             alert(m1);
         })
);
