/*
 * $Id$
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Web )
    Konno.Web = {};

if ( !Konno.Web.Search )
    Konno.Web.Search = {};

if ( !Konno.Web.Search.Engine )
    Konno.Web.Search.Engine = function(){
        this.search = function( Opt, callback ){
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
                    if ( !json.query ) return;
                    var pages = json.query.pages;
                    for ( var pageid in pages ) {
                        var page = pages[pageid];
                        if ( !page.extlinks ) continue;
                        page.extlinks.forEach(function(el){
                            callback( decodeURIComponent( el['*'] ) );
                        });
                    }
                }
            );
        };
        return this;
    };