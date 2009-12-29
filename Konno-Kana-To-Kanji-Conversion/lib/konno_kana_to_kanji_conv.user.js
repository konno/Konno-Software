// ==UserScript==
// @version        $Id$
// @name           Konno Kana To Kanji Conversion
// @namespace      http://userscripts.org/users/119444/scripts
// @include        *
// ==/UserScript==
BEGIN(function(){

var toSortkey = (function(__toSortkey__){
    return function(str){
        var sortkeyText = '';
        Array.prototype
             .forEach
             .call(str, function(c){
                 sortkeyText += __toSortkey__[c]
                             || c;
             });
        return sortkeyText;
    };
})(
    (function(object){
        var __toSortkey__ = {};
        for (var i in object)
            Array.prototype
                 .forEach
                 .call(object[i], function(c){
                     __toSortkey__[c] =
                        String.fromCharCode(
                            c.charCodeAt(0) + i * 1
                        );
                 });
        return __toSortkey__;
    })(
        {
            '-2': 'ぱぴぷぺぽ',
            '-1': 'がぎぐげご'
                + 'ざじずぜぞ'
                + 'だぢづでど'
                + 'ばびぶべぼ',
             '1': 'ぁぃぅぇぉ'
                + 'っ'
                + 'ゃゅょ'
                + 'ゎ'
        }
    )
);

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

var Konno
  = {};
Konno.Kana
  = {};
Konno.Kana.To
  = {};
Konno.Kana.To.Kanji
  = {};
Konno.Kana.To.Kanji.Conversion
  = function(){
        this.convert = function(query, callback){
            getJSON('http://ja.wiktionary.org/w/api.php', {
                action     : 'query',
                list       : 'categorymembers',
                cmtitle    : 'Category:日本語',
                cmprop     : 'title|sortkey',
                cmnamespace: 0,
                cmcontinue : query + '|',
                cmlimit    : 500,
                format     : 'json',
                callback   : '?'
            }, function(json){
                var candidates = [ query ];
                try {
                    json.query
                        .categorymembers
                        .forEach(function(cm){
                            var sortkey =
                                cm.sortkey
                                  .split(/[\s_]/)[0];
                            if ( sortkey            != query &&
                                 toSortkey(sortkey) !=
                                 toSortkey(query) ) throw null;
                            var title = cm.title;
                            if ( title            == query ||
                                 toSortkey(title) ==
                                 toSortkey(query) ) return;
                            candidates.push(title);
                        });
                } catch (e) {}
                callback(candidates);
            });
        };
        return this;
    };

var $$ = (function(elementList){
    return function(selectors){
        return elementList[selectors] ||
             ( elementList[selectors]
             = document.querySelectorAll(selectors) );
    };
})({});

Array.prototype
     .forEach
     .call($$('input, textarea'), function(element){
         var oldText = element.value;
         var listener;
         window.setInterval(function(){
            var text = element.value;
            if (text == oldText) return;
            if (listener) {
                element.removeEventListener('keyup', listener, false);
                listener = null;
            }
            oldText = text;
            if ( !text.trim() ) return;
            var selectedIndices = [];
            var candidatesList  = [];
            var tmp = '';
            (function(query){
                var BLOCK = arguments.callee;
                (new Konno.Kana.To.Kanji.Conversion).convert(
                    query,
                    function(candidates){
                        if ( element.value != text ) return;
                        if ( candidates.length < 2 &&
                             query.length      > 1 ) {
                            tmp += query[0];
                            BLOCK( query.slice(1, query.length) );
                            return;
                        }
                        candidatesList.unshift(candidates);
                        console && console.log(
                            JSON.stringify(candidatesList)
                        );
                        console && console.log(
                            JSON.stringify(selectedIndices)
                        );
                        if (tmp == '') return;
                        console && console.log(
                            JSON.stringify(selectedIndices)
                        );
                        BLOCK(tmp);
                        tmp = '';
                    }
                );
            })(text);
            var i = -1;
            listener = function(event){
                if (!candidatesList.length) return;
                if (i < 0)
                    i += candidatesList.length;
                else if (i >= candidatesList.length)
                    i -= candidatesList.length;
                switch (event.keyCode) {
                    case 37: /* Left */
                        i--;
                        if (i < 0)
                            i += candidatesList.length;
                        break;
                    case 38: /* Up */
                        selectedIndices[i]--;
                        element.value = oldText = text = '';
                        for (var i = 0, l = candidatesList.length;
                             i < l;
                             element.value
                          += oldText
                          += text
                          += candidatesList[i][
                                 selectedIndices[i]
                             ],
                             i++);
                        break;
                    case 39: /* Right */
                        i++;
                        if (i >= candidatesList.length)
                            i -= candidatesList.length;
                        break;
                    case 40: /* Down */
                        selectedIndices[i]++;
                        if ( selectedIndices[i] );
                        element.value = oldText = text = '';
                        for (var i = 0, l = candidatesList.length;
                             i < l;
                             element.value
                          += oldText
                          += text
                          += candidatesList[i][
                                 selectedIndices[i]
                             ],
                             i++);
                        break;
                }
            };
            element.addEventListener('keyup', listener, false);
         }, 1);
     });

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
