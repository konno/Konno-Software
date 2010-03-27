import RegExp.quote;

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Artificial )
    Konno.Artificial = {};

if ( !Konno.Artificial.Intelligence ) {
    Konno.Artificial.Intelligence = function(){
        return this;
    };

    Konno.Artificial.Intelligence.prototype.talk = (function(quotemeta){
        return function( text, callback ){
            var uri = 'http://ja.wikipedia.org/w/api.php';
            getJSON(uri, {
                action  : 'query',
                list    : 'search',
                srsearch: text,
                srwhat  : 'text',
                srinfo  : 'suggestion',
                srprop  : '',
//                srlimit : 50,
                format  : 'json',
                callback: '?',
            }, function(json){
                var distance;
                var answer;
                var title;
                var search = json.query.search;
                var l = search.length;
                var i = 0;
                search.forEach(function(sr){
                    getJSON(uri, {
                        action  : 'parse',
                        page    : sr.title,
                        prop    : 'text',
                        format  : 'json',
                        callback: '?',
                    }, function(json){
                        var node = ( new DOMParser ).parseFromString(
                            '<html>' + json.parse.text['*'] + '</html>',
                            'application/xhtml+xml'
                        );
                        var m = node.documentElement.textContent.match(
                            new RegExp([
                                '「',
                                    '(',
                                        '[^「」\\s]*?',
                                    ')',
                                    quotemeta(text),
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
                            var newDistance =
                                m[1].length
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
                    });
                });
            });
        };
    })(
        (function( regexp, callback ){
            return function(str){
                return str.replace( regexp, callback );
            };
        })( /\W/g, function(m){ return '\\' + m } )
    );
}
