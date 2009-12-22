/*
 * $Id$
 */

if (!this.Konno) var Konno = {};

Konno.Search = function(){
    this.search = function(Opt, callback){
        getJSON(
            'http://' + Opt.lang + '.wikipedia.org/w/api.php',
            {
                action   : 'query',
                prop     : 'extlinks',
                titles   : Opt.text,
                redirects: null,
                ellimit  : 500,
                format   : 'json',
                callback : '?'
            },
            function(json){
                alert( JSON.stringify(json) );
            }
        );
    };
    return this;
};
