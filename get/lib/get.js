/*
 * $Id$
 */

if (!this.get) {
    this.get = function(uri, callback){
        getJSON('http://api.dan.co.jp/lleval.cgi', {
            c: '?',
            s: [
                   '#!/usr/bin/perl',
                   'use strict;',
                   'use warnings;',
                   'use LWP::Simple;',
                   'print get( q(' + uri + ') );',
               ].join('\n'),
        }, function(json){
            callback(json.stdout);
        });
    };
}
