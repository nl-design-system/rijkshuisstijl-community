import { promises } from 'fs';
import { join } from 'path';

const FIGMA_FOLDER = 'figma';
const GENERATED_FOLDER = `./src/generated`;
const PRODUCT_FOLDER = join(GENERATED_FOLDER, 'product');

const ensureProductFolder = async () => {
  return promises.mkdir(PRODUCT_FOLDER, { recursive: true });
};

const getFigmaTokensFile = async () => {
  return JSON.parse(await promises.readFile(join(FIGMA_FOLDER, 'figma.tokens.json'), 'utf-8'));
};

const isProduct = (content) => {
  return Object.hasOwn(content, '$figmaStyleReferences') && content.group === 'Rijkshuisstijl';
};

const extractSeparateFiles = async () => {
  const themes = JSON.parse(await promises.readFile(join(GENERATED_FOLDER, 'figma.tokens.json'), 'utf-8'));

  Object.keys(themes).forEach(async (theme) => {
    const content = themes[theme];

    let folder = GENERATED_FOLDER;
    if (isProduct(content)) {
      await ensureProductFolder();
      folder = PRODUCT_FOLDER;
    }
    await promises.writeFile(join(folder, `${theme}.json`), JSON.stringify(content, null, 2));
  });
};

const run = async () => {
  const figmaTokensFile = await getFigmaTokensFile();

  const { $themes, $metadata } = figmaTokensFile;

  await promises.writeFile(join(GENERATED_FOLDER, `$themes.json`), JSON.stringify($themes, null, 2));
  await promises.writeFile(join(GENERATED_FOLDER, `$metadata.json`), JSON.stringify($metadata, null, 2));

  await extractSeparateFiles();
};

await run();
