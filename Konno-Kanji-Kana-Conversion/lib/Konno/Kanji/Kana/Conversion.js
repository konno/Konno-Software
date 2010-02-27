/*
 * $Id$
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Kanji )
    Konno.Kanji = {};

if ( !Konno.Kanji.Kana )
    Konno.Kanji.Kana = {};

if ( !Konno.Kanji.Kana.Conversion ) (function(){
    var dict = {};
    (function BLOCK( hostname, cmtitle, cmcontinue ){
        getJSON('http://' + hostname + '/w/api.php', {
            action     : 'query',
            list       : 'categorymembers',
            cmtitle    : cmtitle,
            cmprop     : 'title|sortkey',
            cmnamespace: 0,
            cmcontinue : cmcontinue,
            cmlimit    : 500,
            format     : 'json',
            callback   : '?',
        }, function(json){
            var queryContinue = json['query-continue'];
            if ( queryContinue )
                BLOCK(
                    hostname,
                    cmtitle,
                    queryContinue.categorymembers.cmcontinue
                );
            json.query.categorymembers.forEach(function(cm){
                var title   = cm.title;
                var splits  = cm.sortkey.split(/[\s_]/);
                var sortkey = splits.pop();
                if ( sortkey.indexOf('*') != -1 ) return;
                if ( sortkey == title )
                    sortkey = splits.pop();
                dict[title] = sortkey;
            });
        });
    })( 'ja.wiktionary.org', 'Category:日本語' );
    Konno.Kanji.Kana.Conversion = function(){
        this.dictionary = dict;
        this.convert    = function(text){
            return this.dictionary[text];
        };
        return this;
    };
})();
