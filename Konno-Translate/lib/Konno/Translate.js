/*
 * $Id$
 */

if (!this.Konno) var Konno = {};

Konno.Translate = function(){
    this.translate = function(Opt, callback){
        (function(sl, tl, text){
            var BLOCK = arguments.callee;
            getJSON('http://' + [
                sl + '.wikipedia.org',
                'w',
                'api.php'
            ].join('/') + '?' + [
                'action='  + 'query',
                'prop='    + 'langlinks',
                'titles='  + encodeURIComponent(
                                 text
                             ).replace(/%20/g, '+'),
                'redirects',
                'lllimit=' + 500,
                'format='  + 'json',
                'callback='
            ].join('&'), function(json){
                var flag = false;
                for each (var page in json.query.pages) {
                    var langlinks = page.langlinks;
                    if (!langlinks) continue;
                    var title = page.title;
                    langlinks.forEach(function(ll){
                        var lang = ll.lang;
                        if (tl == '*' || lang != tl) return;
                        callback(text, ll['*'], title, lang);
                        flag = true;
                    });
                }
                if (flag) return;
                var k = text.length - 1;
                if (!k) {
                    callback();
                    return;
                }
                text = text.slice(0, k);
                BLOCK(sl, tl, text);
            });
        })(Opt.sl, Opt.tl, Opt.text);
    };
    return this;
};

function getJSON(uri, fn){
    var cb =
      'jsonp' + Math.floor( Math.random() * 1e13 );
    window[cb] = fn;
    uri += cb;
    var script  = document.createElement('script');
    script.type = 'application/javascript';
    script.src  = uri;
    document.body.appendChild(script);
}
