// ==UserScript==
// @version        $Id$
// @name           Konno Translate
// @namespace      http://userscripts.org/users/119444/scripts
// @include        *
// ==/UserScript==
BEGIN(function(){

var sl =
/* Translate from: */ 'en';
var tl =
/* Translate into: */ 'ja';

var getJSON = function(url, data, callback){
    var flag = true;
    for (var key in data) {
        var value = data[key];
        if (flag) {
            url += '?';
            flag = false;
        }
        else {
            url += '&';
        }
        if (value == '?') {
            value = 'jsonp'
                  + Math.floor(
                        Math.random() * 1e13
                    );
            this[value] = callback;
        }
        url += encodeURIComponent(key);
        if (value == null) continue;
        url += '='
            +  encodeURIComponent(
                   value
               ).replace(/%20/g, '+');
    }
    var script  = document.createElement('script');
    script.type = 'application/javascript';
    script.src  = url;
    document.body.appendChild(script);
};

var Konno = {};

Konno.Translate = function(){
    this.translate = function(Opt, callback){
        getJSON('http://' + [
            Opt.sl + '.wikipedia.org',
            'w',
            'api.php',
        ].join('/'), {
            action   : 'query',
            prop     : 'langlinks',
            titles   : Opt.text,
            redirects: null,
            lllimit  : 500,
            format   : 'json',
            callback : '?',
        }, function(json){
            var pages = json.query.pages;
            for (var pageid in pages) {
                var page = pages[pageid];
                var title = page.title;
                if (Opt.sl == Opt.tl) {
                    callback(title, title);
                    return;
                }
                var langlinks = page.langlinks;
                if (!langlinks) {
                    callback();
                    return;
                }
                try {
                    langlinks.forEach(function(ll){
                        var lang = ll.lang;
                        if (lang != Opt.tl) return;
                        callback(ll['*'], title);
                        throw null;
                    });
                    callback();
                } catch (e) {}
                return;
            }
        });
    };
    return this;
};

window.addEventListener('mouseup', function(){
    var text = getSelection().toString();
    if (!text) return;
    (new Konno.Translate).translate({
        sl  : sl,
        tl  : tl,
        text: text
    }, function(result, canonical){
        if ( !result ||
             getSelection()
                .toString() != text ) return;
        alert([
            text.trim(),
            canonical,
            result,
        ].join(': '));
    });
}, false);

});

function BEGIN(fun){
    var script
      = document.createElement('script');
    script.type
      = 'application/javascript';
    script.textContent
      = '(' + fun.toString() + ')()';
    document.body.appendChild(script);
}
