import RegExp.quote;
import JSONHttpRequest;

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Artificial )
    Konno.Artificial = {};

if ( !Konno.Artificial.Intelligence ) {
    Konno.Artificial.Intelligence = function(uri){
        this.api = uri || 'http://ja.wikipedia.org/w/api.php';
        return this;
    };

    Konno.Artificial.Intelligence.prototype.talk = function( text, callback ){
        var api = this.api;
        var req = new JSONHttpRequest();
        req.open('GET', api, true);
        req.onreadystatechange = function(){
            if ( req.readyState != 4 ||
                 req.status     != 200 ) return;
            var distance;
            var answer;
            var title;
            var search = req.responseJSON.query.search;
            var l = search.length;
            var i = 0;
            search.forEach(function(sr){
                var req = new JSONHttpRequest();
                req.open('GET', api, true);
                req.onreadystatechange = function(json){
                    if ( req.readyState != 4 ||
                         req.status     != 200 ) return;
                    var node = ( new DOMParser ).parseFromString([
                        '<html>',
                            req.responseJSON.parse.text['*'],
                        '</html>',
                    ].join(''), 'application/xhtml+xml');
                    var matches = node.documentElement.textContent.match(
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
                    if ( matches != null ) {
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
