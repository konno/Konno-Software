/*
 * $Id$
 */

if ( !this.lambda ) {
    this.lambda = function(){
        Array.prototype.push.call(
            arguments,
            [
                "delete arguments.callee",
                "this.lambda = " + arguments.callee.toString(),
                "return "        + Array.prototype.pop.call(arguments),
            ].join(';')
        );
        return Function.apply( this, arguments );
    };
}
