if ( !String.prototype.encodeEntities )
    String.prototype.encodeEntities = (function(entity){
        return function(){
            var buf = '';
            Array.prototype.forEach.call(this.toString(), function(c){
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