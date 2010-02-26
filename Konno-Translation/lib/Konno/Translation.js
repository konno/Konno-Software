/*
 * $Id$
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Translation )
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
                        callback( title, Opt.tl );
                        continue;
                    }
                    var langlinks = page.langlinks;
                    if ( !langlinks ) continue;
                    try {
                        langlinks.forEach(function(ll){
                            var lang   = ll.lang;
                            var result = ll['*'];
                            if ( Opt.tl == '*' ) {
                                callback( result, lang );
                                return;
                            }
                            if ( lang != Opt.tl ) return;
                            callback( result, lang );
                            throw null;
                        });
                    }
                    catch (e) {}
                }
            });
        };
        return this;
    };
