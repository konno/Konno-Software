/*
 * $Id$
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Language )
    Konno.Language = {};

if ( !Konno.Language.Detection )
    Konno.Language.Detection = function(){
        this.detect = (function(defaultSuspects){
            return function( Opt, callback ){
                if ( !Opt.suspects || !Opt.suspects.length )
                    Opt.suspects = defaultSuspects;
                try {
                    Opt.suspects.forEach(function(lang){
                        getJSON(
                            'http://' + lang + '.wikipedia.org/w/api.php',
                            {
                                action   : 'query',
                                prop     : 'revisions',
                                titles   : Opt.text,
                                redirects: null,
                                format   : 'json',
                                callback : '?',
                            },
                            function(json){
                                for ( var pageid in json.query.pages ) {
                                    if ( /* missing */ pageid < 0 ) return;
                                    callback( lang, Opt.text );
                                    if ( !Opt.once ) continue;
                                    throw null;
                                }
                            }
                        );
                    });
                }
                catch (e) {}
            };
        })(
            (function(){
                var a = 'a'.charCodeAt(0);
                var defaultSuspects = [];
                for ( var i = 0; i < 26; i++ )
                    for ( var j = 0; j < 26; j++ )
                        defaultSuspects.push(
                            String.fromCharCode(a + i) +
                            String.fromCharCode(a + j)
                        );
                return defaultSuspects;
            })()
        );
        return this;
    };
