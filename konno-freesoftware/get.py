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
response = urlopen( Request( uri, None, { 'User-Agent': agent } ) )

print('Content-Type: application/javascript; charset=UTF-8')
print('')
print('%s(%s)' % (
    callback,
    json.dumps({
        'body'  : response.read().decode('utf8'),
        'header': dict([
                      ( k.lower(), v.strip() )
                          for ( k, v ) in response.info().items()
                  ]),
    })
))
