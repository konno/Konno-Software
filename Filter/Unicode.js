/*
 * import String.fromCharCode;
 */

if ( !this.Filter )
    this.Filter = {};

if ( !Filter.Unicode )
    Filter.Unicode = function(src){
        return src.replace(/\U([\dA-Za-z]{8})/g, function( m0, m1 ){
            return String.fromCharCode( parseInt( m1, 16 ) );
        });
    };
