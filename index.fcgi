#!/home1/sumitsk20/public_html/azyro.in/bin/python

try:
    import os,sys
    from flup.server.fcgi import WSGIServer
    from django.core.wsgi import get_wsgi_application
    sys.path.insert(0, "/home1/sumitsk20/public_html/azyro.in/azyro/")
    os.environ['DJANGO_SETTINGS_MODULE'] = "azyro.settings"
    import traceback
    WSGIServer(get_wsgi_application()).run()
except Exception as e:
    with open('/home1/sumitsk20/public_html/azyro.in/azyro/log.txt', 'w+') as f:
        f.write(str(e))
        f.write(traceback.format_exc())