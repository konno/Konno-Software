import cgitb; cgitb.enable()
import cgi
import os
try:
    import json
except:
    from django.utils import simplejson as json

callback = cgi.FieldStorage().getfirst('callback', 'jsonp')
print('Content-Type: application/javascript; charset=UTF-8')
print('')
print( callback + '(' + json.dumps( dict(os.environ) ) + ')' )
