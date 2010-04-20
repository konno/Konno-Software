if ( !this.decodeXMLEntities )
    this.decodeXMLEntities = (function( regexp, callback ){
        return function(str){
            return str.replace( regexp, callback );
        };
    })(
        /&(?:(?:[gl]|quo)t|a(?:pos|mp));/g,
        (function(char){
            return function($0){
                return char[$0];
            };
        })({
            '&quot;':  '"',
            '&amp;' :  '&',
            '&apos;': '\'',
            '&lt;'  :  '<',
            '&gt;'  :  '>',
        })
    );
