import JSONHttpRequest;

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
            req.send('GET', 'http://' + [
                argument.lang + '.wikipedia.org',
                'w',
                'api.php',
            ].join('/'));
            req.onreadystatechange = function(){
                if ( req.readyState != 4 ||
                     req.status     != 200 ) return;
                var pages = req.response.query.pages;
                Object.keys(pages).forEach(function(pageid){
                    var page     = pages[pageid];
                    var extlinks = page.extlinks;
                    if ( !extlinks ) return;
                    extlinks.forEach(function(el){
                        callback( decodeURIComponent( el['*'] ) );
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
