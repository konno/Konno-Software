/*
 * $Id$
 */

if (!Element.prototype.$$x) {
    Element.prototype.$$x = (function(
        result,
        resultType,
        namespaceResolver,
        nodes
    ){
        return function(xpathExpression, contextNode){
            if ( !nodes[xpathExpression] ) {
                if (!contextNode) contextNode = this;
                nodes[xpathExpression] = [];
                try {
                    for (var xpathResult =
                             document.evaluate(
                                 xpathExpression,
                                 contextNode,
                                 namespaceResolver,
                                 resultType,
                                 result
                             ),
                         node; node = xpathResult.iterateNext();
                         nodes[xpathExpression].push(node));
                }
                catch (e) {}
            }
            return nodes[xpathExpression];
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
