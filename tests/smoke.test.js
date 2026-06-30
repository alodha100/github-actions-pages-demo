import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('package has build and deployment demo metadata', async () => {
  const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

  assert.equal(packageJson.name, 'github-actions-pages-demo');
  assert.equal(packageJson.scripts.build, 'vite build');
  assert.equal(packageJson.scripts.test, 'node --test tests/*.test.js');
});
