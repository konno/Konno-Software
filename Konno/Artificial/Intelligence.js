/*
 * import RegExp.quote;
 * import JSONHttpRequest;
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Artificial )
    Konno.Artificial = {};

if ( !Konno.Artificial.Intelligence ) {
    Konno.Artificial.Intelligence = function( hostname, pathname ){
        this.hostname = hostname || 'ja.wikipedia.org';
        this.pathname = pathname || '/w/api.php';
        return this;
    };

    Konno.Artificial.Intelligence.prototype.talk = function( text, callback ){
        var api = 'http://' + this.hostname + this.pathname;
        var req = new JSONHttpRequest();
        req.open('GET', api, true);
        req.onload = function(){
            var distance;
            var answer;
            var title;
            var search = req.responseJSON.query.search;
            var l = search.length;
            var i = 0;
            search.forEach(function(sr){
                var req = new JSONHttpRequest();
                req.open('GET', api, true);
                req.onload = function(json){
                    if ( !req.responseJSON.parse ) return;
                    var node = ( new DOMParser ).parseFromString([
                        '<html>',
                            req.responseJSON.parse.text['*'],
                        '</html>',
                    ].join(''), 'application/xhtml+xml');
                    var m = node.documentElement.textContent.match(
                        new RegExp([
                            '「',
                                '(',
                                    '[^「」\\s]*?',
                                ')',
                                RegExp.quote(text),
                                '(',
                                    '[^「」\\s]*?',
                                ')',
                            '」',
                            '(',
                                '[\\s\\S]*?',
                            ')',
                            '「',
                                '(',
                                    '[^「」\\s]+?',
                                ')',
                            '」'
                        ].join(''), 'i')
                    );
                    if ( m != null ) {
                        var newDistance = m[1].length
                                        + m[2].length
                                        + m[3].length;
                        if ( answer == null || newDistance < distance ) {
                            title    = sr.title;
                            answer   = m[4];
                            distance = newDistance;
                        }
                    }
                    if ( ++i < l || answer == null ) return;
                    callback( answer, title );
                };
                req.send({
                    action  : 'parse',
                    page    : sr.title,
                    prop    : 'text',
                    format  : 'json',
                    callback: true,
                });
            });
        };
        req.send({
            action  : 'query',
            list    : 'search',
            srsearch: text,
            srwhat  : 'text',
            srinfo  : 'suggestion',
            srprop  : '',
//            srlimit : 50,
            format  : 'json',
            callback: true,
        });
    };
}
