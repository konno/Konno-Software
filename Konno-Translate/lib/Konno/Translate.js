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
                var title = page.title;
                if (Opt.sl == Opt.tl) {
                    callback(title, title);
                    continue;
                }
                var langlinks = page.langlinks;
                if (!langlinks) {
                    callback();
                    continue;
                }
                try {
                    langlinks.forEach(function(ll){
                        var lang = ll.lang;
                        if (lang != Opt.tl) return;
                        callback(ll['*'], title);
                        throw null;
                    });
                    callback();
                } catch (e) {}
            }
        });
    };
    return this;
};
