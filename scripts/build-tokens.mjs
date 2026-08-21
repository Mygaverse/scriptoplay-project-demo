import { readFile, writeFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';
import { createConfig, createBreakpointConfig } from '../style-dictionary.config.mjs';

// Style Dictionary's CLI (`style-dictionary build --config ...`) only runs
// one static config per invocation. Two independent mode axes need their
// own runs - theme (light/dark, a JS-toggled class) and breakpoint
// (mobile/tablet/web, real viewport width) - so this replaces the CLI with
// a script that builds each and writes them to separate files.

// Theme: tokens-light.css under :root, tokens-dark.css under .dark.
for (const theme of ['light', 'dark']) {
  const sd = new StyleDictionary(createConfig(theme));
  // eslint-disable-next-line no-await-in-loop
  await sd.buildAllPlatforms();
}

// Breakpoint (real CSS media queries, mobile-first): mobile is the
// unconditional base (no wrapper needed), tablet/web wrap the generated
// :root block in @media (min-width: ...) after the fact - Style Dictionary's
// css/variables format has no built-in @media wrapping, so this does it as
// a small text transform rather than a custom format function.
const BREAKPOINT_PX = { tablet: 768, web: 1440 };

for (const breakpoint of ['mobile', 'tablet', 'web']) {
  const sd = new StyleDictionary(createBreakpointConfig(breakpoint));
  // eslint-disable-next-line no-await-in-loop
  await sd.buildAllPlatforms();

  const px = BREAKPOINT_PX[breakpoint];
  if (px == null) continue; // mobile stays as the plain :root base

  const path = `src/styles/tokens-bp-${breakpoint}.css`;
  // eslint-disable-next-line no-await-in-loop
  const css = await readFile(path, 'utf8');
  const wrapped = css.replace(
    /:root \{([\s\S]*)\}\n?$/,
    (_match, body) => `@media (min-width: ${px}px) {\n  :root {${body}  }\n}\n`,
  );
  // eslint-disable-next-line no-await-in-loop
  await writeFile(path, wrapped);
}
