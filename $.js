if ( !this.$ )
    this.$ = (function(element){
        return function( selectors, flag ){
            return !flag &&
                   element[selectors] ||
                 ( element[selectors] =
                     document.querySelector(selectors) );
        };
    })({});
