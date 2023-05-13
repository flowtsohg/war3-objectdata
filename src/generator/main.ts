import { objectDataGenerator } from './generator';
import { loadData } from './data';
import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';

(async function() {
  console.log('Starting');
  const generatorData = await loadData('enus');
  const objectData = await objectDataGenerator(generatorData);

  if (!existsSync('src/generated')) { await mkdir('src/generated'); }
  if (!existsSync('src/generated/constants')) { await mkdir('src/generated/constants'); }
  if (!existsSync('dist/cjs/generated')) { await mkdir('dist/cjs/generated', { recursive: true }); }

  for (const [name, objects] of Object.entries(objectData)) {
    await writeFile(`src/generated/${name}.ts`, objects.tsContent);
    await writeFile(`src/generated/constants/${name}.ts`, objects.constants);
    await writeFile(`dist/cjs/generated/${name}data.json`, objects.jsonContent);
  }
  console.log('Finished');
}());
