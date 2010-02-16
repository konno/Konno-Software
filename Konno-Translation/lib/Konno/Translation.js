/*
 * $Id$
 */

if (!this.Konno)
    this.Konno = {};

if (!Konno.Translation)
    Konno.Translation = function(){
        this.translate = function( Opt, callback ){
            getJSON('http://' + Opt.sl + '.wikipedia.org/w/api.php', {
                action   : 'query',
                prop     : 'langlinks',
                titles   : Opt.text,
                redirects: null,
                lllimit  : 500,
                format   : 'json',
                callback : '?',
            }, function(json){
                var pages = json.query.pages;
                for ( var pageid in pages ) {
                    var page  = pages[pageid];
                    var title = page.title;
                    if ( Opt.sl == Opt.tl ) {
                        callback( title, title, Opt.tl );
                        continue;
                    }
                    var langlinks = page.langlinks;
                    if ( !langlinks ) {
                        callback();
                        continue;
                    }
                    try {
                        langlinks.forEach(function(ll){
                            if ( Opt.tl != '*' &&
                                 Opt.tl != ll.lang ) return;
                            callback( ll['*'], title, ll.lang );
                            throw null;
                        });
                        callback();
                    }
                    catch (e) {}
                }
            });
        };
        return this;
    };
