if ( !Object.keys )
    Object.keys = function(object){
        var array = [];
        for ( var property in object )
            if ( object.hasOwnProperty(property) )
                array.push(property);
        return array;
    };
