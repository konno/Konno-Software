/*
 * $Id$
 */

if (!this.Konno) var Konno = {};

Konno.Search = function(){
    this.search = function(lang, query, callback){
        getJSON(
            'http://' + lang + '.wikipedia.org/w/api.php',
            {
                action   : 'query',
                prop     : 'extlinks',
                titles   : query,
                redirects: null,
                ellimit  : 500,
                format   : 'json',
                callback : '?'
            },
            function(json){
                for each (var page in json.query.pages) {
                    if (!page.extlinks) continue;
                    page.extlinks.forEach(function(el){
                        callback( el['*'] );
                    });
                }
            }
        );
    };
    return this;
};
