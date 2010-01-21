/*
 * $Id$
 */

if (!Date.prototype.strftime) {
    Date.prototype.strftime = function(fmt){
        return fmt.replace(/%([%A-Za-z])/g, (function(s){
            return function(m0, m1){
                return s[m1] || m1;
            };
        })({
            '%': '%',
        }));
    };
}
