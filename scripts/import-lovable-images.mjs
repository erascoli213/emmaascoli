// One-time import: copies every image the site uses from Lovable's servers into
// public/images so the site no longer depends on Lovable. Safe to re-run; it skips
// images that are already downloaded.
import { readFile, writeFile, mkdir, readdir, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const OG_IMAGE = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/lovp_1y55836ym795b912ksy2xm8sa8/d6aac504c747a6db8b92ede5ad1961f5_1791834917269.png';

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p); else if (e.name.endsWith('.asset.json')) yield p;
  }
}
const exists = (p) => access(p).then(() => true, () => false);

async function download(url, dest) {
  if (await exists(dest)) return 'skipped';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  return 'downloaded';
}

let failed = 0;
for await (const file of walk(path.join(root, 'src/assets'))) {
  const meta = JSON.parse(await readFile(file, 'utf8'));
  const dest = path.join(root, 'public', meta.url);
  try { console.log(await download(meta.lovable_url, dest), meta.url); }
  catch (err) { failed++; console.error('FAILED', meta.url, err.message); }
}
try { console.log(await download(OG_IMAGE, path.join(root, 'public/og-image.png')), 'og-image.png'); }
catch (err) { failed++; console.error('FAILED og-image.png', err.message); }
if (failed) { console.error(`${failed} image(s) failed`); process.exit(1); }
