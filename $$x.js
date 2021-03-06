if ( !this.$$x )
    this.$$x = (function(
        result,
        resultType,
        namespaceResolver,
        nodes
    ){
        return function( xpathExpression, contextNode, flag ){
            if ( !nodes[xpathExpression] || flag ) {
                if ( !contextNode ) contextNode = document;
                nodes[xpathExpression] = [];
                try {
                    for ( var xpathResult =
                            document.evaluate(
                                xpathExpression,
                                contextNode,
                                namespaceResolver,
                                resultType,
                                result
                            ),
                          node; node = xpathResult.iterateNext();
                          nodes[xpathExpression].push(node) );
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
