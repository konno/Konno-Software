/*
 * $Id$x.js 61 2009-11-25 15:05:10Z Konno.Software $
 */

var $x = (function(
    result,
    resultType,
    namespaceResolver,
    contextNode,
    xpathResult
){
    return function(xpathExpression){
        if ( !xpathResult[xpathExpression] ) {
            var nodesSnapshot = document.evaluate(
                xpathExpression,
                contextNode,
                namespaceResolver,
                resultType,
                result
            );
            xpathResult[xpathExpression] = [];
            for (var i = 0, l = nodesSnapshot.snapshotLength; i < l; i++) {
                xpathResult[xpathExpression].push(
                    nodesSnapshot.snapshotItem(i)
                );
            }
        }
        return xpathResult[xpathExpression];
    };
})(
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    function(){ return 'http://www.w3.org/1999/xhtml' },
    document,
    {}
);
