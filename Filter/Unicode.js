/*
 * import String.fromCharCode;
 */

if ( !this.Filter )
    this.Filter = {};

if ( !Filter.Unicode )
    Filter.Unicode = function(src){
        return src.replace(/\U([\dA-Za-z]{8})/g, function( $0, $1 ){
            return String.fromCharCode( parseInt( $1, 16 ) );
        });
    };
