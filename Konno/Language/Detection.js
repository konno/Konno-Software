/*
 * import JSONHttpRequest;
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Language )
    Konno.Language = {};

if ( !Konno.Language.Detection )
    Konno.Language.Detection = function(){
        this.detect = (function(defaultSuspects){
            return function( argument, callback ){
                if ( !argument.suspects || !argument.suspects.length )
                    argument.suspects = defaultSuspects;
                var api = 'http://' + lang + '.wikipedia.org/w/api.php';
                try {
                    argument.suspects.forEach(function(lang){
                        var req = new JSONHttpRequest();
                        req.open('GET', api, true);
                        req.onload = function(json){
                            for ( var pageid in json.query.pages ) {
                                if ( pageid < 0 ) return;
                                callback( lang, argument.text );
                                if ( !argument.once ) continue;
                                throw null;
                            }
                        };
                        req.send({
                            action   : 'query',
                            prop     : 'revisions',
                            titles   : argument.text,
                            redirects: null,
                            format   : 'json',
                            callback : true,
                        });
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
                            String.fromCharCode(a + i)
                          + String.fromCharCode(a + j)
                        );
                return defaultSuspects;
            })()
        );
        return this;
    };
