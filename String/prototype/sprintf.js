if ( !String.prototype.sprintf )
    String.prototype.sprintf = function(){
        var args = arguments;
        return this.toString().replace(/%s/g, function(){
            return Array.prototype.shift.call(args) || '';
        });
    };
