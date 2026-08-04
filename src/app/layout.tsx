import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scriptoplay Design System — Token Pipeline Demo',
  description:
    'Figma (Token Studio) -> GitHub -> Style Dictionary -> Storybook, demonstrated end to end.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
