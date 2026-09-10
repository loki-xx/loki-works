import type { LucideIcon } from 'lucide-react';
import { Aperture, AtSign, BookOpen, Disc3, Mail, Music2, Play, ShoppingBag, Video } from 'lucide-react';

export type CreatorLink = { name: string; href: string; icon: LucideIcon; external: boolean; note?: string };

// TODO: # を実際の公式URLへ置き換えてください。未指定URLは意図的に無効化されています。
export const creatorLinks: CreatorLink[] = [
  { name: 'X', href: 'https://x.com/lowcat_books', icon: AtSign, external: true, note: '@lowcat_books' },
  { name: 'YouTube', href: '#', icon: Play, external: true, note: 'TODO' },
  { name: 'TikTok', href: '#', icon: Video, external: true, note: 'TODO' },
  { name: 'Spotify', href: '#', icon: Disc3, external: true, note: 'TODO' },
  { name: 'note', href: '#', icon: BookOpen, external: true, note: 'TODO' },
  { name: 'Instagram', href: '#', icon: Aperture, external: true, note: 'TODO' },
  { name: 'Web / Store', href: '#', icon: ShoppingBag, external: true, note: 'TODO' },
  { name: 'Contact', href: '#', icon: Mail, external: false, note: 'TODO' },
];

export const musicLinks: CreatorLink[] = [
  { name: 'Spotify', href: '#', icon: Disc3, external: true, note: 'TODO: URL' },
  { name: 'Apple Music', href: '#', icon: Music2, external: true, note: 'TODO: URL' },
  { name: 'YouTube Music', href: '#', icon: Play, external: true, note: 'TODO: URL' },
  { name: 'YouTube', href: '#', icon: Play, external: true, note: 'TODO: URL' },
  { name: 'TuneCore', href: '#', icon: Music2, external: true, note: 'TODO: URL' },
];
