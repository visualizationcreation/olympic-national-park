from pathlib import Path
import base64,json,hashlib
p=Path(__file__).resolve().parent
d=json.loads((p/'orb.json').read_text(encoding='utf-8'))
assigned=[key for point in d['points'] for key in point['mediaPack']]
assert len(assigned)==len(set(assigned)), 'A point image is assigned to more than one point'
assert len({hashlib.sha256((p/d['media'][key]['file']).read_bytes()).hexdigest() for key in assigned})==len(assigned), 'Different filenames contain the same image'
for m in d['media'].values():m['data']='data:'+m.get('mime','image/jpeg')+';base64,'+base64.b64encode((p/m['file']).read_bytes()).decode()
s=(p/'shell.html').read_text(encoding='utf-8').replace('/*STYLE*/',(p/'style.css').read_text(encoding='utf-8')).replace('/*HERO*/',d['media']['mountains']['data']).replace('/*DATA*/',json.dumps(d,ensure_ascii=False).replace('</','<\\/')).replace('/*APP*/',(p/'app.js').read_text(encoding='utf-8'))
(p/'index.html').write_text(s,encoding='utf-8')
(p/'.nojekyll').write_text('')
print('Self-contained index:',len(s.encode()),'bytes')
