/*
 * $Id$
 */

if (!this.Konno) this.Konno = {};

Konno.Translate = function(){
    this.translate = function(Opt, callback){
        (function(sl, tl, text){
            var BLOCK = arguments.callee;
            getJSON('http://' + sl + '.wikipedia.org/w/api.php', {
                action   : 'query',
                prop     : 'langlinks',
                titles   : text,
                redirects: null,
                lllimit  : 500,
                format   : 'json',
                callback : '?'
            }, function(json){
                var flag = false;
                for each (var page in json.query.pages) {
                    var langlinks = page.langlinks;
                    if (!langlinks) continue;
                    var title = page.title;
                    langlinks.forEach(function(ll){
                        var lang = ll.lang;
                        if (tl == '*' ||
                            tl != lang) return;
                        callback(ll['*'], title);
                        flag = true;
                    });
                }
                if (flag) return;
                var k = text.length - 1;
                if (!k) {
                    callback();
                    return;
                }
                text = text.slice(0, k);
                BLOCK(sl, tl, text);
            });
        })(Opt.sl, Opt.tl, Opt.text);
    };
    return this;
};
