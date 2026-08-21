import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// Bridges Token Studio's JSON export format (value/type, {alias} refs) into
// Style Dictionary's pipeline: unit conversion, alias resolution, etc.
register(StyleDictionary);

/**
 * Token Studio's single-file sync (free tier - multi-file sync is Pro-only)
 * exports every set nested under its own top-level key. This repo has five:
 * `global` (theme-neutral primitives - radius, spacing, type, phase colors,
 * ink, feedback colors), `theme-light` / `theme-dark` (the color roles that
 * flip when the dashboard's `.dark` class toggles - surface, text, brand),
 * `semantic`, and `component`. Token references like "{color.brand.primary}"
 * are written relative to the merged tree, not
 * "{global.color.brand.primary}", so each build merges `global` with
 * exactly ONE theme set - the same merge Token Studio itself performs when
 * you pick an active theme in the plugin - before the tokens-studio
 * preprocessor resolves aliases.
 *
 * `color` is the one branch both `global` and the active theme set define,
 * so it needs a level-two merge rather than a flat spread - but no group
 * name is shared between them (global.color has ink/success/warning/danger/
 * white/phase/scrim; the theme sets have surface/text/brand), so a plain
 * spread at the `color` level is enough - nothing clobbers.
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

/**
 * Breakpoint is a second, orthogonal mode axis alongside light/dark - real
 * evidence for it is scriptoplay-web's own --breakpoint-lg override
 * (variables.css:92) and its dashboard-wide grid-cols-N usage. Unlike theme,
 * which needs a JS-toggled class (light/dark is a user choice, not derived
 * from anything the browser knows on its own), breakpoint IS something the
 * browser already knows - so these tokens are real CSS custom properties
 * scoped inside `@media (min-width: ...)` blocks instead, resolved purely
 * by viewport width with no JS involved. That's also why this never needs
 * crossing with the theme axis: grid and heading size don't depend on
 * light/dark, so this is entirely separate output, not a 2x3 matrix.
 *
 * Only `global` + the semantic typography roles + the one active `bp-*` set
 * are merged here - NOT all of `semantic`, since semantic.text/surface/
 * action/feedback alias to `{color.*}` paths that only theme-light/
 * theme-dark define; pulling those in without a theme set would leave
 * unresolved references. Nothing this axis produces (layout.grid,
 * typography.heading) is a color, so it doesn't need them.
 */
export function createBreakpointConfig(breakpoint) {
  const bpSet = `bp-${breakpoint}`;
  const preprocessorName = `unwrap-token-studio-sets-${bpSet}`;

  StyleDictionary.registerPreprocessor({
    name: preprocessorName,
    preprocessor: (dictionary) => ({
      ...dictionary.global,
      ...dictionary[bpSet],
      typography: {
        ...dictionary.semantic.typography,
        ...dictionary[bpSet].typography,
      },
    }),
  });

  return {
    source: ['tokens.json'],
    preprocessors: [preprocessorName, 'tokens-studio'],
    platforms: {
      css: {
        transforms: [...StyleDictionary.hooks.transformGroups['tokens-studio'], 'name/kebab'],
        buildPath: 'src/styles/',
        files: [
          {
            destination: `tokens-bp-${breakpoint}.css`,
            format: 'css/variables',
            options: { outputReferences: true, selector: ':root' },
          },
        ],
      },
    },
  };
}

export default createConfig('light');
