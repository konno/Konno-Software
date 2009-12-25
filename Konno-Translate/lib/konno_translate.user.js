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

window.addEventListener('mouseup', function(){
    var sel  = window.getSelection();
    var text = sel.toString();
    if (!text) return;
    (new Konno.Translate).translate({
        sl  : sl,
        tl  : tl,
        text: text
    }, function(result, canonical){
        alert(
            result
          ? [
                text.trim(),
                canonical,
                result
            ].join(': ')
          : [
                'No available translation of "',
                text,
                '"'
            ].join('')
        );
    });
}, false);

if (!this.Konno) this.Konno = {};

Konno.Translate = function(){
    this.translate = function(Opt, callback){
        (function(sl, tl, text){
            var BLOCK = arguments.callee;
            getJSON('http://' + sl + '.wikipedia.org/w/api.php', {
                action   : 'query',
                prop     : 'langlinks',
                titles   : text,
                redirects: null,
                lllimit  : 500,
                format   : 'json',
                callback : '?'
            }, function(json){
                var flag = false;
                for each (var page in json.query.pages) {
                    var langlinks = page.langlinks;
                    if (!langlinks) continue;
                    var title = page.title;
                    langlinks.forEach(function(ll){
                        var lang = ll.lang;
                        if (tl == '*' ||
                            tl != lang) return;
                        callback(ll['*'], title);
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

function getJSON(url, data, callback){
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
}

});

function BEGIN(fn){
    var script         = document.createElement('script');
    script.type        = 'application/javascript';
    script.textContent = '(' + fn.toString() + ')()';
    document.body.appendChild(script);
}
