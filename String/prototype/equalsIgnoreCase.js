if ( !String.prototype.equalsIgnoreCase )
    String.prototype.equalsIgnoreCase = function(anotherString){
        var string = this.toString();
        return string               == anotherString
            || string.toUpperCase() == anotherString.toUpperCase()
            || string.toLowerCase() == anotherString.toLowerCase();
    };
