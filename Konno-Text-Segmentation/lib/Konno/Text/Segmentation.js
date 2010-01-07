/*
 * $Id$
 */

if (!this.Konno)
    this.Konno = {};

if (!Konno.Text)
    Konno.Text = {};

if (!Konno.Text.Segmentation)
    Konno.Text.Segmentation = function(){
        this.sources = [
            'wikipedia.org',
            'wiktionary.org'
        ];
        this.segment = function(text, lang, callback){
            var sources = this.sources;
            var tmp     = '';
            var l       = sources.length;
            var i       = 0;
            (function(query){
                var BLOCK    = arguments.callee;
                var src      = sources[i];
                var hostname = lang + '.' + src;
                getJSON('http://' + hostname + '/w/api.php', {
                    action  : 'query',
                    prop    : 'info',
                    titles  : query,
                    format  : 'json',
                    callback: '?'
                }, function(json){
                    for (var pageid in json.query.pages) {
                        if ( pageid       < 0 && /* missing */
                             query.length > 1 ) {
                            i++;
                            if (i < l) {
                                BLOCK(query);
                                return;
                            }
                            tmp =  query.slice(-1) + tmp;
                            i   =  0;
                            BLOCK( query.slice(0, -1) );
                            return;
                        }
                        callback(query, src);
                        if (tmp != '') {
                            i    = 0;
                            BLOCK(tmp);
                            tmp  = '';
                            return;
                        }
                        return;
                    }
                });
            })(text);
        };
        return this;
    };
