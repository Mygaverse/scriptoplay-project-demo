import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// Bridges Token Studio's JSON export format (value/type, {alias} refs) into
// Style Dictionary's pipeline: unit conversion, alias resolution, etc.
register(StyleDictionary);

const config = {
  source: ['tokens/global.json', 'tokens/semantic.json', 'tokens/component.json'],
  preprocessors: ['tokens-studio'],
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
