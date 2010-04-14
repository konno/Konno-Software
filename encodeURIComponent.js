if ( encodeURIComponent(' ') == '%20' ) {
    this.__encodeURIComponent__ = encodeURIComponent;
    encodeURIComponent = function(str){
        return __encodeURIComponent__(str).replace(/%20/g, '+');
    };
}
