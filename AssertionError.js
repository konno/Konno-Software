if ( !this.AssertionError ) {
    this.AssertionError = function(message){
        this.name    = 'AssertionError';
        this.message = message;
        return this;
    };

    AssertionError.prototype = new Error();
}
