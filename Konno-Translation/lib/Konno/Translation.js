/*
 * $Id$
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Translation )
    Konno.Translation = function(){
        this.translate = function( text, sl, tl, callback ){
            getJSON('http://' + sl + '.wikipedia.org/w/api.php', {
                action   : 'query',
                prop     : 'langlinks',
                titles   : text,
                redirects: null,
                lllimit  : 500,
                format   : 'json',
                callback : '?',
            }, function(json){
                var pages = json.query.pages;
                for ( var pageid in pages ) {
                    var page  = pages[pageid];
                    var title = page.title;
                    if ( sl == tl ) {
                        callback( title, tl );
                        continue;
                    }
                    var langlinks = page.langlinks;
                    if ( !langlinks ) continue;
                    try {
                        langlinks.forEach(function(ll){
                            var lang   = ll.lang;
                            var result = ll['*'];
                            if ( tl == '*' ) {
                                callback( result, lang );
                                return;
                            }
                            if ( lang != tl ) return;
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
