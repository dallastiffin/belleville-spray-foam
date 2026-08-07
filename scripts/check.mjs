import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('dist');const files=fs.readdirSync(root).filter(f=>f.endsWith('.html'));let failed=false;
for(const file of files){const html=fs.readFileSync(path.join(root,file),'utf8');const text=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&\w+;/g,' ').trim();const words=text.split(/\s+/).length;const min=file==='index.html'?2000:file==='privacy.html'?200:750;if(words<min){console.error(`${file}: ${words} words; requires ${min}`);failed=true}else console.log(`${file}: ${words} words`);if(!html.includes('tel:+16139127508')){console.error(`${file}: missing click-to-call link`);failed=true}}
if(failed)process.exit(1);
