import cgitb; cgitb.enable()
import cgi, re
try:
    from urllib.request import urlopen
except:
    from urllib2        import urlopen
try:
    import json
except:
    from django.utils   import json

form     = cgi.FieldStorage()
uri      = form.getfirst('uri',      'http://www.example.com/')
callback = form.getfirst('callback', 'jsonp')
content  = urlopen(uri).read().decode('utf8')
match    = re.search('<title>(.*?)</title>', content, re.IGNORECASE)
title    = match.group(1) if match else None
print('Content-Type: application/javascript; charset=UTF-8')
print('')
print('%s(%s)' % ( callback, json.dumps(title) ))
