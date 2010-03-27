import JSONHttpRequest;

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Translation ) {
    Konno.Translation = function(){
        return this;
    };

    Konno.Translation.prototype.translate = function( argument, callback ){
        var req = new JSONHttpRequest();
        req.open('GET', 'http://' + [
            argument.sl + '.wikipedia.org',
            'w',
            'api.php',
        ].join('/'), true);
        req.onload = function(){
            var pages = req.responseJSON.query.pages;
            Object.keys(pages).forEach(function(pageid){
                var page  = pages[pageid];
                var title = page.title;
                if ( argument.sl == argument.tl ) {
                    callback( title, argument.tl );
                    return;
                }
                var langlinks = page.langlinks;
                if ( !langlinks ) return;
                try {
                    langlinks.forEach(function(ll){
                        var lang   = ll.lang;
                        var result = ll['*'];
                        if ( argument.tl == '*' ) {
                            callback( result, lang );
                            return;
                        }
                        if ( lang != argument.tl ) return;
                        callback( result, lang );
                        throw null;
                    });
                }
                catch (e) {}
            });
        };
        req.send({
            action   : 'query',
            prop     : 'langlinks',
            titles   : argument.text,
            redirects: null,
            lllimit  : 500,
            format   : 'json',
            callback : true,
        });
    };
}
