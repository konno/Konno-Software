/*
 * $Id$
 */

if ( !this.Konno )
    this.Konno = {};

if ( !Konno.Kanji )
    Konno.Kanji = {};

if ( !Konno.Kanji.Kana )
    Konno.Kanji.Kana = {};

if ( !Konno.Kanji.Kana.Conversion )
    Konno.Kanji.Kana.Conversion = function(){
        this.dictionary = {};
        this.convert    = function(text){
            return this.dictionary[text];
        };
        (function( dict, hostname, cmtitle, cmcontinue ){
            var BLOCK = arguments.callee;
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
                        dict,
                        hostname,
                        cmtitle,
                        queryContinue.categorymembers.cmcontinue
                    );
                json.query.categorymembers.forEach(function(cm){
                    var title   = cm.title;
                    var splits  = cm.sortkey.split(/[\s_]/);
                    var sortkey = splits.pop();
                    if ( sortkey == title )
                        sortkey = splits.pop();
                    dict[title] = sortkey;
                });
            });
        })( this.dictionary, 'ja.wiktionary.org', 'Category:日本語' );
        return this;
    };
