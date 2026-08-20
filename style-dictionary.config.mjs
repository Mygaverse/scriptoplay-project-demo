import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// Bridges Token Studio's JSON export format (value/type, {alias} refs) into
// Style Dictionary's pipeline: unit conversion, alias resolution, etc.
register(StyleDictionary);

// Token Studio's single-file sync (free tier - multi-file sync is Pro-only)
// exports every set nested under its own top-level key, e.g.
// { "global": {...}, "semantic": {...}, "component": {...}, "$metadata": {...} }.
// Token references like "{color.brand.primary}" are written relative to the
// merged tree, not "{global.color.brand.primary}", so unwrap the set-name
// nesting before the tokens-studio preprocessor resolves aliases.
StyleDictionary.registerPreprocessor({
  name: 'unwrap-token-studio-sets',
  preprocessor: (dictionary) => ({
    ...dictionary.global,
    ...dictionary.semantic,
    ...dictionary.component,
  }),
});

const config = {
  source: ['tokens.json'],
  preprocessors: ['unwrap-token-studio-sets', 'tokens-studio'],
  platforms: {
    css: {
      // 'tokens-studio' group ends with name/camel; append name/kebab so CSS
      // custom properties come out as --color-brand-primary, not --colorBrandPrimary.
      transforms: [...StyleDictionary.hooks.transformGroups['tokens-studio'], 'name/kebab'],
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
    js: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/tokens/',
      files: [{ destination: 'tokens.js', format: 'javascript/es6' }],
    },
  },
};

export default config;
