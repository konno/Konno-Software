if ( !this.decodeXMLEntities )
    this.decodeXMLEntities = (function( regexp, callback ){
        return function(str){
            return str.replace( regexp, callback );
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
