if ( !String.prototype.localeCompare )
    String.prototype.localeCompare = function(anotherString){
        var string = this.toString();
        if ( string.length != anotherString.length )
            return anotherString.length - string.length;
        if ( string == anotherString )
            return 0;
        try {
            Array.prototype.forEach.call(string, function(c, i){
                var d = anotherString[i];
                if ( c == d ) return;
                throw c.charCodeAt(0) - d.charCodeAt(0);
            });
        }
        catch (e) {
            return e;
        }
        return 0;
    };
