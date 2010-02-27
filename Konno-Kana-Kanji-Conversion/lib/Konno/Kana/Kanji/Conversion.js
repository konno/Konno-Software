/*
 * $Id$
 */

if (!this.Konno)
    this.Konno = {};

if (!Konno.Kana)
    Konno.Kana = {};

if (!Konno.Kana.Kanji)
    Konno.Kana.Kanji = {};

if (!Konno.Kana.Kanji.Conversion)
    Konno.Kana.Kanji.Conversion = function(){
        this.sources = [
            {
                hostname: 'ja.wiktionary.org',
                cmtitle : 'Category:日本語',
            },
            {
                hostname: 'ja.wikipedia.org',
                cmtitle : 'Category:存命人物',
            },
        ];
        this.convert = function(query, callback){
            var sources    = this.sources;
            var candidates = [ query ];
            var i          = 0;
            var l          = sources.length;
            (function BLOCK(){
                var src   = sources[i];
                getJSON('http://' + src.hostname + '/w/api.php', {
                    action     : 'query',
                    list       : 'categorymembers',
                    cmtitle    : src.cmtitle,
                    cmprop     : 'title|sortkey',
                    cmnamespace: 0,
                    cmcontinue : toSortkey(query) + '|',
                    cmlimit    : 500,
                    format     : 'json',
                    callback   : '?',
                }, function(json){
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
                    i++;
                    if (i >= l) {
                        getJSON('http://ja.wikipedia.org/w/api.php', {
                            action     : 'query',
                            list       : 'search',
                            srsearch   : query,
                            srnamespace: 0,
                            srwhat     : 'text',
                            srinfo     : '',
                            srprop     : '',
                            srlimit    : 50,
                            format     : 'json',
                            callback   : '?',
                        }, function(json){
                            json.query
                                .search
                                .forEach(function(sr){
                                    var title = sr.title;
                                    if ( title            == query ||
                                         toSortkey(title) ==
                                         toSortkey(query) ) return;
                                    candidates.push(sr.title);
                                });
                            callback(candidates);
                        });
                        return;
                    }
                    BLOCK();
                });
            })();
        };
        return this;
    };
