if ( !Math.Matrix ) {
    Math.Matrix = function(matrix){
        this.valueOf = function(){
            return matrix;
        };
        return this;
    };

    Math.Matrix.prototype.__defineGetter__('length', function(){
        return this.valueOf().length + 1;
    });

    Math.Matrix.prototype.add = function(matrix){
        var m = this.rows().length;
        var n = this.columns().length;
        if ( m != matrix.rows().length ||
             n != matrix.columns().length ) return;
        var sum = [];
        for ( var i = 1; i < m; i++ )
            for ( var j = 1; j < n; !sum[i - 1] && ( sum[i - 1] = [] ),
                  sum[i - 1][j - 1] = this.entry(i, j) + matrix.entry(i, j),
                  j++ );
        return new Math.Matrix(sum);
    };

    Math.Matrix.prototype.columns = function(j){
        var columns = [];
        this.valueOf().forEach(function(row){
            row.forEach(function(entry, j){
                if ( !columns[j] ) columns[j] = [];
                columns[j].push( row[j] );
            });
        });
        return new Math.Matrix(
                   j
                 ? [ columns[j - 1] ]
                 : columns
               );
    };

    Math.Matrix.prototype.entry = function(i, j){
        return this.rows(i).columns(j).valueOf()[0][0];
    };

    Math.Matrix.prototype.equals = function(matrix){
        var m = this.rows().length;
        var n = this.columns().length;
        if ( m != matrix.rows().length ||
             n != matrix.columns().length ) return false;
        for ( var i = 1; i < m; i++ )
            for ( var j = 1; j < n; j++ )
                if ( this.entry(i, j) != matrix.entry(i, j) )
                    return false;
        return true;
    };

    Math.Matrix.prototype.forEach = function( callback, thisObject ){
        if ( typeof callback != 'function' )
            throw new TypeError( callback + ' is not a function' );
        for ( var i = 1, m = this.rows().length; i < m; i++ )
            for ( var j = 1, n = this.columns().length; j < n;
                  callback.call( thisObject, this.entry(i, j), i, j, this ),
                  j++ );
    };

    Math.Matrix.prototype.rows = function(i){
        var rows = this.valueOf();
        return new Math.Matrix(
                   i
                 ? [ rows[i - 1] ]
                 : rows
               );
    };

    Math.Matrix.prototype.toString = function(){
        return JSON.stringify( this.valueOf() );
    };
}

var A = new Math.Matrix([
    [ 9, 8, 6 ],
    [ 1, 2, 7 ],
    [ 4, 9, 2 ],
    [ 6, 0, 5 ],
]);

var B = new Math.Matrix([
    [ 9, 8, 6 ],
    [ 1, 2, 7 ],
    [ 4, 9, 2 ],
    [ 6, 0, 5 ],
]);

print( A.equals(B) );
