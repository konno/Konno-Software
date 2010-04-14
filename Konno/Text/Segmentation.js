/*
 * import JSONHttpRequest;
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Text )
    Konno.Text = {};

if ( !Konno.Text.Segmentation )
    Konno.Text.Segmentation = function(){
        this.sources = [
            'ja.wikipedia.org',
            'ja.wiktionary.org',
        ];
        this.segment = function( text, callback ){
            var sources = this.sources;
            var tmp = '';
            var l = sources.length;
            var i = 0;
            (function redo(query){
                var hostname = sources[i];
                var api = 'http://' + hostname + '/w/api.php';
                var req = new JSONHttpRequest();
                req.open('GET', api, true);
                req.onload = function(){
                    var json = req.responseJSON;
                    for ( var pageid in json.query.pages ) {
                        if ( pageid       < 0 &&
                             query.length > 1 ) {
                            i++;
                            if ( i < l ) {
                                redo(query);
                                return;
                            }
                            tmp = query.slice(-1) + tmp;
                            i = 0;
                            redo( query.slice( 0, -1 ) );
                            return;
                        }
                        callback( query, hostname );
                        if ( tmp == '' ) return;
                        i = 0;
                        redo(tmp);
                        tmp = '';
                        return;
                    }
                };
                req.send({
                    action  : 'query',
                    prop    : 'info',
                    titles  : query,
                    format  : 'json',
                    callback: true,
                });
            })(text);
        };
        return this;
    };
