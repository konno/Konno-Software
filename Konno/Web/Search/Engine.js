/*
 * import JSONHttpRequest;
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Web )
    Konno.Web = {};

if ( !Konno.Web.Search )
    Konno.Web.Search = {};

if ( !Konno.Web.Search.Engine )
    Konno.Web.Search.Engine = function(){
        this.search = function( argument, callback ){
            var req = new JSONHttpRequest();
            req.open('GET', 'http://' + [
                argument.lang + '.wikipedia.org',
                'w',
                'api.php',
            ].join('/'));
            req.onload = function(){
                var pages = req.responseJSON.query.pages;
                Object.keys(pages).forEach(function(pageid){
                    var page     = pages[pageid];
                    var extlinks = page.extlinks;
                    if ( !extlinks ) return;
                    extlinks.forEach(function(el){
                        callback(
                            decodeURIComponent( el['*'] ),
                            argument.query
                        );
                    });
                });
            };
            req.send({
                action   : 'query',
                prop     : 'extlinks',
                titles   : argument.query,
                redirects: null,
                ellimit  : 500,
                format   : 'json',
                callback : true,
            });
        };
        return this;
    };
