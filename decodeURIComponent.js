if ( decodeURIComponent('+') != ' ' ) {
    this.__decodeURIComponent__ = decodeURIComponent;
    decodeURIComponent = function(str){
        return __decodeURIComponent__( str.replace(/+/g, ' ') );
    };
}
