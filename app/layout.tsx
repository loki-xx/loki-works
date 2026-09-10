import type { Metadata, Viewport } from 'next';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://loki-creator-portal.loki-x.chatgpt.site'),
  title: { default: 'Loki | Music, Novel & Creative Works', template: '%s | Loki' },
  description: 'Music, novels, animation and creative works by Loki. Home of Mistoria and 低めの猫.',
  keywords: ['Loki', 'Mistoria', '低めの猫', 'music', 'novel', 'animation', 'AI creation'],
  authors: [{ name: 'Loki' }], creator: 'Loki',
  openGraph: { type: 'website', locale: 'ja_JP', siteName: 'Loki Creator Portal', title: 'Loki | Music, Novel & Creative Works', description: 'Music, novels, animation and creative works by Loki. Home of Mistoria and 低めの猫.' },
  twitter: { card: 'summary_large_image', title: 'Loki | Music, Novel & Creative Works', description: 'Music, novels, animation and creative works by Loki. Home of Mistoria and 低めの猫.' },
};
export const viewport: Viewport = { themeColor: '#090a0f', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body><a className="skip-link" href="#main-content">本文へ移動</a><Header /><div id="main-content">{children}</div><Footer /></body></html>;
}
