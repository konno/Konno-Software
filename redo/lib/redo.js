/*
 * $Id$
 */

if (!this.redo)
    this.redo = function(){
        return arguments.callee
                        .caller
                        .apply(this, arguments);
    };
