import { promises } from 'fs';
import { join } from 'path';

const FIGMA_FOLDER = 'figma';
const GENERATED_FOLDER = `./src/generated`;
const PRODUCT_FOLDER = join(GENERATED_FOLDER, 'product');

const ensureProductFolder = async () => promises.mkdir(PRODUCT_FOLDER, { recursive: true });
const getFigmaTokensFile = async () => JSON.parse(await readFile(join(FIGMA_FOLDER, 'figma.tokens.json')));
const isProduct = (content) => Object.hasOwn(content, '$figmaStyleReferences') && content.group === 'Rijkshuisstijl';
const readFile = async (fileName) => promises.readFile(fileName, 'utf-8');
const writeJsonFile = async (fileName, data) => promises.writeFile(fileName, JSON.stringify(data, null, 2));

const extractSeparateFiles = async () => {
  const themes = JSON.parse(await readFile(join(GENERATED_FOLDER, 'figma.tokens.json')));

  Object.keys(themes).forEach(async (theme) => {
    const content = themes[theme];

    let folder = GENERATED_FOLDER;
    if (isProduct(content)) {
      await ensureProductFolder();
      folder = PRODUCT_FOLDER;
    }
    await writeJsonFile(join(folder, `${theme}.json`), content);
  });
};

const run = async () => {
  const figmaTokensFile = await getFigmaTokensFile();

  const { $themes, $metadata } = figmaTokensFile;

  await writeJsonFile(join(GENERATED_FOLDER, `$themes.json`), $themes);
  await writeJsonFile(join(GENERATED_FOLDER, `$metadata.json`), $metadata);

  await extractSeparateFiles();
};

const start = Date.now();
await run();
const end = Date.now();

console.log(`Design tokens build succeeded in %dms`, end - start);
