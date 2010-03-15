import cgitb; cgitb.enable()
import cgi

try:
    from urllib.request import Request, urlopen
except:
    from urllib2        import Request, urlopen

try:
    import json
except:
    from django.utils   import simplejson as json

form     = cgi.FieldStorage()
uri      = form.getfirst('uri',      'http://www.example.com/')
callback = form.getfirst('callback', 'jsonp')

agent    = 'Mozilla/5.0 (compatible; \
Googlebot/2.1; +http://www.google.com/bot.html)'
request  = Request( uri, None, { 'User-Agent': agent } )
response = urlopen(request)

print('Content-Type: application/javascript; charset=UTF-8')
print('')
print( callback + '(' + json.dumps({
    'header': dict([
                  ( k.lower(), v.strip() )
                      for ( k, v ) in response.info().items()
              ]),
    'body'  : response.read().decode('utf8'),
}) + ')' )
