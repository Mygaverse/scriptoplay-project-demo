import StyleDictionary from 'style-dictionary';
import { createConfig } from '../style-dictionary.config.mjs';

// Style Dictionary's CLI (`style-dictionary build --config ...`) only runs
// one static config per invocation. Theming needs two runs - one per active
// Token Studio theme - each merging `global` with a different theme-color
// set (see style-dictionary.config.mjs), so this replaces the CLI with a
// small script that builds both and writes them to separate files
// (tokens-light.css under `:root`, tokens-dark.css under `.dark`).
for (const theme of ['light', 'dark']) {
  const sd = new StyleDictionary(createConfig(theme));
  // eslint-disable-next-line no-await-in-loop
  await sd.buildAllPlatforms();
}
