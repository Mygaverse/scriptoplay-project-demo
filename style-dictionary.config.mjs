import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// Bridges Token Studio's JSON export format (value/type, {alias} refs) into
// Style Dictionary's pipeline: unit conversion, alias resolution, etc.
register(StyleDictionary);

/**
 * Token Studio's single-file sync (free tier - multi-file sync is Pro-only)
 * exports every set nested under its own top-level key. This repo has five:
 * `global` (theme-neutral primitives - radius, spacing, type, phase colors),
 * `theme-light` / `theme-dark` (the color roles that flip when the
 * dashboard's `.dark` class toggles - surface, text, brand), `semantic`,
 * and `component`. Token references like "{color.brand.primary}" are
 * written relative to the merged tree, not "{global.color.brand.primary}",
 * so each build merges `global` with exactly ONE theme set - this is the
 * same merge Token Studio itself performs when you pick an active theme in
 * the plugin - before the tokens-studio preprocessor resolves aliases.
 *
 * `color` is the one branch both `global` and the active theme set define,
 * so it needs a deeper merge than a flat spread: `color.brand` exists on
 * both sides too (global's `ink`, the theme's `primary`/`primary-hover`/
 * `text`) and would otherwise clobber one another.
 */
export function createConfig(theme) {
  const themeSet = theme === 'dark' ? 'theme-dark' : 'theme-light';
  const preprocessorName = `unwrap-token-studio-sets-${theme}`;

  StyleDictionary.registerPreprocessor({
    name: preprocessorName,
    preprocessor: (dictionary) => ({
      ...dictionary.global,
      ...dictionary.semantic,
      ...dictionary.component,
      color: {
        ...dictionary.global.color,
        ...dictionary[themeSet].color,
        brand: {
          ...dictionary.global.color.brand,
          ...dictionary[themeSet].color.brand,
        },
      },
    }),
  });

  return {
    source: ['tokens.json'],
    preprocessors: [preprocessorName, 'tokens-studio'],
    platforms: {
      css: {
        // 'tokens-studio' group ends with name/camel; append name/kebab so CSS
        // custom properties come out as --color-brand-primary, not --colorBrandPrimary.
        transforms: [...StyleDictionary.hooks.transformGroups['tokens-studio'], 'name/kebab'],
        buildPath: 'src/styles/',
        files: [
          {
            destination: `tokens-${theme}.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
              selector: theme === 'dark' ? '.dark' : ':root',
            },
          },
        ],
      },
      // JS export only makes sense for one static snapshot - nothing in this
      // repo consumes it live, so it isn't theme-switched. Built from light.
      ...(theme === 'light'
        ? {
            js: {
              transformGroup: 'tokens-studio',
              buildPath: 'src/tokens/',
              files: [{ destination: 'tokens.js', format: 'javascript/es6' }],
            },
          }
        : {}),
    },
  };
}

export default createConfig('light');
