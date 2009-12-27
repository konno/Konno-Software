/*
 * $Id$x.js 164 2009-12-27 14:20:00Z Konno.Software $x.js 162 2009-12-27 14:18:19Z Konno.Software $
 */

if (!this.$x) {
    this.$x = (function(
        result,
        resultType,
        namespaceResolver,
        contextNode,
        xpathResult
    ){
        return function(xpathExpression){
            if ( !xpathResult[xpathExpression] ) {
                var nodesSnapshot
                  = document.evaluate(
                        xpathExpression,
                        contextNode,
                        namespaceResolver,
                        resultType,
                        result
                    );
                xpathResult[xpathExpression] = [];
                for (var i = 0,
                     l = nodesSnapshot.snapshotLength;
                     i < l;
                     xpathResult[xpathExpression].push(
                         nodesSnapshot.snapshotItem(i++)
                     ));
            }
            return xpathResult[xpathExpression];
        };
    })(
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        function(){
            return 'http://www.w3.org/1999/xhtml';
        },
        document,
        {}
    );
}
