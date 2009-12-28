// ==UserScript==
// @version        $Id$
// @name           Konno Kana To Kanji Conversion
// @namespace      http://userscripts.org/users/119444/scripts
// @include        *
// ==/UserScript==
BEGIN(function(){

var toSortkey = (function(){
    var __toSortkey__ = {};
    {
        
    }
    return function(str){
        var sortkeyText = '';
        Array.prototype
             .forEach
             .call(str, function(c){
                 sortkeyText +=
                    __toSortkey__[c] || c;
             });
        return sortkeyText;
    };
})();

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
                json.query
                    .categorymembers
                    .forEach(function(cm){
                        var sortkey =
                            cm.sortkey
                              .split(/[\s_]/)[0];
                        if ( sortkey != toSortkey(query) ) return;
                        var title = cm.title;
                        callback(title);
                    });
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
         var oldQuery = element.value;
         window.setInterval(function(){
            var query = element.value;
            if (query == oldQuery) return;
            oldQuery = query;
            if ( !query.trim() ) return;
            var candidates = [];
            (new Konno.Kana.To.Kanji.Conversion).convert(
                query,
                function(candidate){
                    candidates.push(candidate);
console.log( JSON.stringify(candidates) );
                }
            );
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
