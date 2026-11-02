"""Gera ../index.html a partir de template.html + data.json.
Uso: cd _build && python3 build.py ../index.html
"""
import json, sys
from map_br import mapa_svg

d = json.load(open('data.json'))
t = open('template.html').read()
d['MAPA'] = mapa_svg()
d['HORARIO_LOWER'] = d['HORARIO'][0].lower() + d['HORARIO'][1:]
for k, v in d.items():
    if k.isupper():
        t = t.replace('{{%s}}' % k, v)
assert '{{' not in t, [l for l in t.splitlines() if '{{' in l][:3]
open(sys.argv[1], 'w').write(t)
print(len(t))
