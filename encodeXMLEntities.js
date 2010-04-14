if ( !this.encodeXMLEntities )
    this.encodeXMLEntities = (function(entity){
        return function(str){
            var buf = '';
            Array.prototype.forEach.call(str, function(c){
                buf += entity[c] || c;
            });
            return buf;
        };
    })({
        '"': '&quot;',
        '&': '&amp;',
       '\'': '&apos;',
        '<': '&lt;',
        '>': '&gt;',
    });
