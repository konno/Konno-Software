// ==UserScript==
// @version        $Id$
// @name           Konno Kana To Kanji Conversion
// @namespace      http://userscripts.org/users/119444/scripts
// @include        *
// ==/UserScript==
BEGIN(function(){

var toSortkey = (function(obj){
    var __toSortkey__ = {};
    for (var i in obj)
        Array.prototype.forEach.call(
            obj[i],
            function(c){
                __toSortkey__[c] =
                    String.fromCharCode(
                        c.charCodeAt(0) + i * 1
                    );
            }
        );
    return function(str){
        var sortkeyText = '';
        Array.prototype.forEach.call(
            str,
            function(c){
                sortkeyText +=
                    __toSortkey__[c] || c;
            }
        );
        return sortkeyText;
    };
})({
    '-2': 'ぱぴぷぺぽ',
    '-1': 'がぎぐげござじずぜぞだぢづでどばびぶべぼ',
     '1': 'ぁぃぅぇぉっゃゅょゎ'
});

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
            +  encodeURIComponent(value);
    }
    var script  = document.createElement('script');
    script.type = 'application/javascript';
    script.src  = url;
    document.body.appendChild(script);
};

var $ = (function(element){
    return function(selectors){
        if ( !element[selectors] )
            element[selectors] =
                document.querySelector(selectors);
        return element[selectors];
    };
})({});

var $$ = (function(elementList){
    return function(selectors){
        if ( !elementList[selectors] )
            elementList[selectors] =
                document.querySelectorAll(selectors);
        return elementList[selectors];
    };
})({});

if (!this.Konno)
    var Konno           = {};
if (!Konno.Kana)
    Konno.Kana          = {};
if (!Konno.Kana.To)
    Konno.Kana.To       = {};
if (!Konno.Kana.To.Kanji)
    Konno.Kana.To.Kanji = {};

Konno.Kana.To.Kanji.Conversion = function(){
    this.convert = (function(sources){
        return function(text, callback){
            var srsearch = encodeURIComponent(
                               text
                           ).replace(/%20/g, '+');
            getJSON('http://ja.wikipedia.org/w/api.php', {
                action  : 'query',
                list    : 'search',
                srsearch: encodeURIComponent(
                              text
                          ).replace(/%20/g, '+'),
                srwhat  : 'text',
                srinfo  : 'suggestion',
                srprop  : '',
                srlimit : 2,
                format  : 'json',
                callback: '?'
            }, function(json){
                json
                    .query
                    .search
                    .forEach(function(sr){
                        callback(sr.title);
                    });
            });
            var target     = toSortkey(text);
            var cmcontinue = encodeURIComponent(target + '|');
            sources.forEach(function(src){
                getJSON('http://' + src.hostname + '/w/api.php', {
                    action     : 'query',
                    list       : 'categorymembers',
                    cmtitle    : encodeURIComponent(
                                     src.cmtitle
                                 ),
                    cmprop     : 'title|sortkey',
                    cmnamespace: 0,
                    cmcontinue : cmcontinue,
                    cmlimit    : 500,
                    format     : 'json',
                    callback   : '?'
                }, function(json){
                    try {
                        json
                            .query
                            .categorymembers
                            .forEach(function(cm){
                                var key = cm.sortkey
                                            .split(/[\s_]/)[0];
                                if (key != target) throw null;
                                callback(cm.title);
                            });
                    } catch (e) {}
                });
            });
        };
    })([
        {
            hostname: 'ja.wikipedia.org',
            cmtitle : 'Category:存命人物'
        },
        {
            hostname: 'ja.wiktionary.org',
            cmtitle : 'Category:日本語'
        }
    ]);
    return this;
};

Array.prototype.forEach.call($$('input'), function(input){
    var listener;
    var oq = input.value;
    window.setInterval(function(){
        var q = input.value;
        if (q == oq) return;
        oq = q;
        var candidates = [oq];
        if (listener) {
            input.removeEventListener('keyup', listener, false);
            listener = null;
        }
        if ( !q.trim() ) return;
        (new Konno.Kana.To.Kanji.Conversion).convert(
            q,
            function(result){
                if (input.value != q) return;
                candidates.push(result);
                console.log( JSON.stringify(candidates) );
            }
        );
        listener = (function(i){
            return function(event){
                switch (event.keyCode) {
                    case 38: /* Up */
                        i--;
                        if (i < 0)
                            i = candidates.length - 1;
                        input.value = oq = candidates[i];
                        break;
                    case 40: /* Down */
                        i++;
                        if (i >= candidates.length)
                            i = 0;
                        input.value = oq = candidates[i];
                        break;
                }
            };
        })(0);
        input.addEventListener('keyup', listener, false);
    }, 1);
});

});

function BEGIN(fn){
    var script         = document.createElement('script');
    script.type        = 'application/javascript';
    script.textContent = '(' + fn.toString() + ')()';
    document.body.appendChild(script);
}
