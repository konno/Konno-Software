/*
 * $Id$
 */

document.ready(function(){
    Array.prototype.forEach.call(
        document.getElementsByTagName('script'),
        function(script){
            var s = script.textContent;
            if ( !s || !/^#!/(s) ) return;
            getJSON('http://api.dan.co.jp/lleval.cgi', {
                c: '?',
                s: s,
            }, function(json){
                var parentNode = script.parentNode;
                var div        = document.createElement('div');
                div.appendChild(script);
                div.innerHTML  = json.stdout;
                parentNode.appendChild(div);
            });
        }
    );
});
