if ( !Array.prototype.forEachRight )
    Array.prototype.forEachRight = function(){
        this.reverse();
        this.forEach.apply( this, arguments );
    };
