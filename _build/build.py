import json,sys,urllib.parse
d=json.load(open('data.json'))
t=open('template.html').read()
import base64,io
from PIL import Image
def b64(name):
    b=io.BytesIO(); Image.open('imagens/'+name+'.png').save(b,'WEBP',quality=70,method=6); return base64.b64encode(b.getvalue()).decode()
for k in ['HERO','PHONE','TEAM','DOCS']: t=t.replace('{{%s}}'%k, b64(k.lower()))
q=urllib.parse.quote_plus(d['maps_query'])
d['MAPS_LINK']='https://www.google.com/maps/search/?api=1&query='+q
d['MAPS_EMBED']='https://www.google.com/maps?q='+q+'&amp;output=embed'
for k,v in d.items():
    if k.isupper(): t=t.replace('{{%s}}'%k, v)
assert '{{' not in t, [l for l in t.splitlines() if '{{' in l][:3]
open(sys.argv[1],'w').write(t); print(len(t))
