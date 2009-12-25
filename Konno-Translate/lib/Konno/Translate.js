/*
 * $Id$
 */

if (!this.Konno) this.Konno = {};

Konno.Translate = function(){
    this.translate = function(Opt, callback){
        getJSON('http://' + [
            Opt.sl + '.wikipedia.org',
            'w',
            'api.php'
        ].join('/'), {
            action   : 'query',
            prop     : 'langlinks',
            titles   : Opt.text,
            redirects: null,
            lllimit  : 500,
            format   : 'json',
            callback : '?'
        }, function(json){
            var pages = json.query.pages;
            for (var pageid in pages) {
                var page = pages[pageid];
                var langlinks = page.langlinks;
                if (!langlinks) continue;
                var title = page.title;
                langlinks.forEach(function(ll){
                    var lang = ll.lang;
                    if (Opt.tl != '*' &&
                        Opt.tl != lang) return;
                    callback(ll['*'], title);
                });
            }
        });
    };
    return this;
};
