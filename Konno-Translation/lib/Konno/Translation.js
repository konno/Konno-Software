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
                    if ( !langlinks ) {
                        callback();
                        continue;
                    }
                    try {
                        langlinks.forEach(function(ll){
                            if ( tl != '*' &&
                                 tl != ll.lang ) return;
                            callback( ll['*'], tl );
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
