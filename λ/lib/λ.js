/*
 * $Id$
 */

if ( !this['λ'] ) {
    this['λ'] = function(){
        Array.prototype.push.call(
            arguments,
            [
                "delete arguments.callee",
                "this['λ'] = " + arguments.callee.toString(),
                "return "      + Array.prototype.pop.call(arguments),
            ].join(';')
        );
        return Function.apply( this, arguments );
    };
}
