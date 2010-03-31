if ( !Array.prototype.reduceRight )
    Array.prototype.reduceRight = function(){
        this.reverse();
        return this.reduce.apply( this, arguments );
    };
