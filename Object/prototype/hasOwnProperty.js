//if ( !Object.prototype.hasOwnProperty ) {
    Object.prototype.hasOwnProperty = function(prop){
        return prop in this.constructor;
    };
//}
