/*
 * $Id$
 */

if (!this.$x) {
    this.$x = (function(
        result,
        resultType,
        namespaceResolver,
        node
    ){
        return function(xpathExpression, contextNode){
            if ( !node[xpathExpression] ) {
                if (!contextNode) contextNode = document;
                try {
                    node[xpathExpression] =
                        document.evaluate(
                            xpathExpression,
                            contextNode,
                            namespaceResolver,
                            resultType,
                            result
                        ).iterateNext();
                }
                catch (e) {}
            }
            return node[xpathExpression];
        };
    })(
        null,
        XPathResult.ANY_TYPE,
        function(){
            return 'http://www.w3.org/1999/xhtml';
        },
        {}
    );
}
