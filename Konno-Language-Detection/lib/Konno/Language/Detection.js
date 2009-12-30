/*
 * $Id$
 */

if (!this.Konno)
    this.Konno
      = {};

if (!Konno.Language)
    Konno.Language
      = {};

if (!Konno.Language.Detection)
    Konno.Language.Detection
      = function(){
            this.detect = (function(defaultSuspects){
                return function(text, suspects, callback){
                    if (!suspects ||
                        !suspects.length)
                        suspects = defaultSuspects;
                    suspects.forEach(function(lang){
                        getJSON(
                            'http://' + lang + '.wikipedia.org/w/api.php',
                            {
                                action   : 'query',
                                prop     : 'revisions',
                                titles   : text,
                                redirects: '',
                                format   : 'json',
                                callback : '?'
                            },
                            function(json){
                                for (var pageid in json.query.pages) {
                                    if (pageid < 0) return; /* missing */
                                    callback(lang);
                                }
                            }
                        );
                    });
                };
            })(
                (function(){
                    var a = 'a'.charCodeAt(0);
                    var defaultSuspects = [];
                    for (var i = 0; i < 26; i++)
                        for (var j = 0; j < 26; j++)
                            defaultSuspects.push(
                                String.fromCharCode(a + i)
                              + String.fromCharCode(a + j)
                            );
                    return defaultSuspects;
                })()
            );
            return this;
        };
