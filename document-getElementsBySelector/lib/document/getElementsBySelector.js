/*
 * $Id$
 */

if (!document.getElementsBySelector) {
    document.getElementsBySelector = function(selector){
        return /^#/.test(selector)
          ? document.getElementById( selector.replace(/^#/, '') );
          : document.getElementsByTagName(selector);
    };
}
