from pathlib import Path
import base64,json,hashlib
p=Path(__file__).resolve().parent
d=json.loads((p/'orb.json').read_text(encoding='utf-8'))
ids={point['id'] for point in d['points']}
assert len(ids)==len(d['points']), 'Duplicate point ID'
assert d['root'] in ids
assert len({point['label'] for point in d['points']})==len(ids), 'Duplicate map label'
for point in d['points']:
 assert set(point['links'])=={'up','down','left','right','forward','backward'}
 assert all(edge['to'] is None or edge['to'] in ids for edge in point['links'].values())
 assert all(key in d['sources'] for key in point['sources'])
 assert all(child in ids for child in point.get('children',[]))
 if point['kind']=='floor':
  assert all(point.get(key) for key in ('knownBasis','openQuestion','uncertainty','researchApproach'))
assigned=[key for point in d['points'] for key in point['mediaPack']]
assert len(assigned)==len(set(assigned)), 'A point image is assigned to more than one point'
assert len({hashlib.sha256((p/d['media'][key]['file']).read_bytes()).hexdigest() for key in assigned})==len(assigned), 'Different filenames contain the same image'
for m in d['media'].values():m['data']='data:'+m.get('mime','image/jpeg')+';base64,'+base64.b64encode((p/m['file']).read_bytes()).decode()
s=(p/'shell.html').read_text(encoding='utf-8').replace('/*STYLE*/',(p/'style.css').read_text(encoding='utf-8')).replace('/*HERO*/',d['media']['mountains']['data']).replace('/*DATA*/',json.dumps(d,ensure_ascii=False).replace('</','<\\/')).replace('/*APP*/',(p/'app.js').read_text(encoding='utf-8'))
(p/'index.html').write_text(s,encoding='utf-8')
if (p/'courses.json').exists():
 courses=json.loads((p/'courses.json').read_text(encoding='utf-8'))
 courses['navigation']={point['id']:{direction:point['links'][direction] for direction in ('up','down')} for point in d['points']}
 (p/'courses.json').write_text(json.dumps(courses,ensure_ascii=False,indent=2),encoding='utf-8')
 (p/'courses-data.js').write_text('window.OLYMPIC_COURSES='+json.dumps(courses,ensure_ascii=False).replace('</','<\\/')+';\n',encoding='utf-8')
(p/'.nojekyll').write_text('')
print('Self-contained index:',len(s.encode()),'bytes')
