if ( !String.prototype.decodeEntities )
    String.prototype.decodeEntities = (function( regexp, callback ){
        return function(){
            return this.toString().replace( regexp, callback );
        };
    })(
        /&(?:(?:[gl]|quo)t|a(?:pos|mp));/g,
        (function(char){
            return function(m0){
                return char[m0];
            };
        })({
            '&quot;':  '"',
            '&amp;' :  '&',
            '&apos;': '\'',
            '&lt;'  :  '<',
            '&gt;'  :  '>',
        })
    );
