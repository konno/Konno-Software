/*
 * $Id$
 */

if (!this.Konno)
    this.Konno = {};

if (!Konno.Text)
    Konno.Text = {};

if (!Konno.Text.Segmentation)
    Konno.Text.Segmentation = function(){
        this.segment = function(text, lang, callback){
            var morphs = [];
            var tmp    = '';
            (function(query){
                var BLOCK = arguments.callee;
                getJSON('http://' + lang + '.wikipedia.org/w/api.php', {
                    action  : 'query',
                    prop    : 'info',
                    titles  : query,
                    format  : 'json',
                    callback: '?'
                }, function(json){
                    for (var pageid in json.query.pages) {
                        if ( pageid       < 0 && /* missing */
                             query.length > 1 ) {
                            tmp += query.slice(-1);
                            BLOCK( query.slice(0, -1) );
                            return;
                        }
                        morphs.push(query);
                        if (tmp != '') {
                            BLOCK(tmp);
                            tmp = '';
                            return;
                        }
                        callback(morphs);
                        return;
                    }
                });
            })(text);
        };
        return this;
    };

(new Konno.Text.Segmentation).segment(
    'The quick brown fox jumps over the lazy dog.',
    'en',
    function(morphs){
    
    }
);
