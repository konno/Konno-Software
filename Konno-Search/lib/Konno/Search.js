/*
 * $Id$
 */

if (!this.Konno)
    this.Konno
      = {};

if (!Konno.Search)
    Konno.Search
      = function(){
            this.search = function(Opt, callback){
                getJSON(
                    'http://' + Opt.lang + '.wikipedia.org/w/api.php',
                    {
                        action   : 'query',
                        prop     : 'extlinks',
                        titles   : Opt.query,
                        redirects: null,
                        ellimit  : 500,
                        format   : 'json',
                        callback : '?',
                    },
                    function(json){
                        var pages = json.query.pages;
                        for (var pageid in pages) {
                            var page = pages[pageid];
                            if (!page.extlinks) continue;
                            page.extlinks.forEach(function(el){
                                callback(
                                    decodeURIComponent(
                                        el['*']
                                    )
                                );
                            });
                        }
                    }
                );
            };
            return this;
        };
