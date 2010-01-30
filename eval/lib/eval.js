/*
 * $Id$
 */

this.__eval__ = this.eval;
this.eval     = function(string, callback){
    if ( !string || !/^\s*#!/(string) )
        return this.__eval__.apply(this, arguments);
    getJSON('http://api.dan.co.jp/lleval.cgi', {
        c: '?',
        s: string,
    }, function(json){
        callback(json.stdout, json.stderr);
    });
};
