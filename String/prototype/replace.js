if ( 'A'.replace('a', '', 'i') != '' ) {
    String.prototype.__replace__ = String.prototype.replace;
    String.prototype.replace = function( substr, newSubstr, flags ){
        return this.__replace__(
            flags
          ? new RegExp( substr, flags )
          : substr,
            newSubstr
        );
    };
}
