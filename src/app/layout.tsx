import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

// Matches scriptoplay-web's own font loading (src/utils/font.ts) - Outfit is
// the real fontFamily.sans token value, so it needs to actually be loaded
// for that token to render as intended rather than silently falling back.
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Scriptoplay Design System — Token Pipeline Demo',
  description:
    'Figma (Token Studio) -> GitHub -> Style Dictionary -> Storybook, demonstrated end to end.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
