// Pre-publication content checks: broken image links, orphan files, personal data, metadata.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const read = (p) => readFileSync(p, 'utf8');
const errors = [];
const cases = JSON.parse(read('src/data/cases.json')).cases;
const slugs = new Set();
const used = new Set();

for (const c of cases) {
  if (slugs.has(c.slug)) errors.push(`duplicate slug ${c.slug}`);
  slugs.add(c.slug);
}
for (const c of cases) {
  for (const r of c.related || []) if (!slugs.has(r)) errors.push(`${c.slug}: unknown related ${r}`);
  if (!['i', 'we'].includes(c.voice)) errors.push(`${c.slug}: voice must be i or we`);
  for (const s of c.scenes) {
    for (const f of s.figures || []) {
      used.add(f.src);
      if (!existsSync(join('public', f.src))) errors.push(`${c.slug}: missing image ${f.src}`);
    }
  }
}
const life = JSON.parse(read('src/data/life.json')).photos;
life.forEach((p) => { used.add(p.src); if (!existsSync(join('public', p.src))) errors.push(`missing image ${p.src}`); });

const walk = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
for (const f of [...walk('public/cases'), ...walk('public/images')].filter((p) => /\.(jpe?g|png)$/i.test(p))) {
  const rel = relative('public', f);
  if (!used.has(rel) && rel.startsWith('cases/')) errors.push(`orphan image ${rel}`);
  // JPEG with an EXIF segment may carry GPS or device data
  if (/\.jpe?g$/i.test(f)) {
    const buf = readFileSync(f).subarray(0, 4096);
    if (buf.includes(Buffer.from('Exif\0\0'))) errors.push(`EXIF metadata in ${rel}`);
  }
}

const texts = ['src/data', 'src/components', 'src/pages', 'index.html', 'public/manifest.json']
  .flatMap((p) => (statSync(p).isDirectory() ? walk(p) : [p]))
  .filter((p) => /\.(json|jsx?|html)$/.test(p));
const pd = [
  [/[\w.-]+@(?!mos\.ru)[\w-]+\.\w+/g, 'email'],
  [/(\+7|8)[\s-]?\(?9\d\d\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/g, 'mobile phone'],
  [/goshaf|227201@/gi, 'known personal address']
];
for (const f of texts) {
  const t = read(f);
  for (const [re, name] of pd) {
    const m = t.match(re);
    // the public contact mailbox in config.json is intentional
    const hits = (m || []).filter((x) => !(f.endsWith('config.json') && x.includes('xn--c1akimk.digital')));
    if (hits.length) errors.push(`${f}: possible ${name}: ${hits.slice(0, 2).join(', ')}`);
  }
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log(`✓ content checks passed (${cases.length} cases, ${used.size} images)`);
