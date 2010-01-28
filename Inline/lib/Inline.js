/*
 * $Id$
 */

document.ready(function(){
    Array.prototype.forEach.call(
        document.getElementsByTagName('script'),
        function(script){
            var src = script.textContent.trim();
            if ( !src || !/^#!/(src) ) return;
            getJSON('http://api.dan.co.jp/lleval.cgi', {
                c: '?',
                s: src,
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
