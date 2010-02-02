import cgitb; cgitb.enable()
import cgi
try:
    from urllib.request import urlopen
except:
    from urllib2        import urlopen
try:
    import json
except:
    from django.utils   import simplejson as json

form     = cgi.FieldStorage()
uri      = form.getfirst('uri',      'http://www.example.com/')
callback = form.getfirst('callback', 'jsonp')
print('Content-Type: application/javascript; charset=UTF-8')
print('')
print(callback + '('
               + json.dumps({
                     "content": urlopen(uri).read().decode('utf8')
                 })
               + ')')
