import cgitb; cgitb.enable()
import cgi, re
try:
    from urllib.request import Request
    from urllib.request import urlopen
except:
    from urllib2        import Request
    from urllib2        import urlopen
try:
    import json
except:
    from django.utils   import simplejson as json

form     = cgi.FieldStorage()
uri      = form.getfirst('uri',      'http://www.example.com/')
callback = form.getfirst('callback', 'jsonp')
agent    = 'Mozilla/5.0 (compatible; \
Googlebot/2.1; +http://www.google.com/bot.html)'
req      = Request( uri, None, { 'User-Agent': agent } )
content  = urlopen(req).read().decode('utf8')
match    = re.search('<title>(.*?)</title>', content, re.IGNORECASE)
title    = match.group(1) if match else None
print('Content-Type: application/javascript; charset=UTF-8')
print('')
print('%s(%s)' % ( callback, json.dumps(title) ))
