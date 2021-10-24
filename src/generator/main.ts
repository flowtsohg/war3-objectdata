import { objectDataGenerator } from './generator';
import { loadData } from './data';
import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';

(async function() {
  console.log('Starting');
  const generatorData = await loadData();
  const objectData = await objectDataGenerator(generatorData);

  if (!existsSync('src/generated')) { await mkdir('src/generated') }

  for (const [name, objects] of Object.entries(objectData)) {
    await writeFile(`src/generated/${name}data.json`, objects.jsonContent);
    await writeFile(`src/generated/${name}.ts`, objects.tsContent);
  }
  console.log('Finished');
}());
