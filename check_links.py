from pathlib import Path
from bs4 import BeautifulSoup
root=Path(__file__).resolve().parent
errors=[];count=0
for f in root.rglob('*.html'):
 s=BeautifulSoup(f.read_text(),"html.parser")
 for tag,attr in [("a","href"),("link","href"),("script","src")]:
  for x in s.find_all(tag):
   v=x.get(attr)
   if not v or v.startswith(("http://","https://","mailto:","tel:","#")): continue
   count+=1; target=(f.parent/v.split("#")[0]).resolve()
   if not target.exists(): errors.append(f"{f.relative_to(root)} -> {v}")
print(f"Checked {count} internal links/assets across {len(list(root.rglob('*.html')))} HTML pages.")
if errors:
 print("BROKEN:");print("\n".join(errors));raise SystemExit(1)
print("PASS: all internal links and assets resolve.")
