import type { LucideIcon } from 'lucide-react';
import { BookOpen, CircleUserRound, Clapperboard, ExternalLink, Music2, Sparkles } from 'lucide-react';

export type PortalItem = { title: string; label: string; description: string; href: string; tone: string; icon: LucideIcon };
export const portalItems: PortalItem[] = [
  { title: 'MISTORIA', label: 'Main project', description: '4人組AIガールズバンド。その音楽と物語。', href: '/mistoria', tone: '#ec4c55', icon: Sparkles },
  { title: 'BOOKS', label: 'Low Cat', description: '小説、音楽、Webへつながる静かな物語。', href: '/books', tone: '#d6c7a5', icon: BookOpen },
  { title: 'MUSIC', label: 'Listen', description: '楽曲とストリーミングサービスへの入口。', href: '/music', tone: '#9ae8ed', icon: Music2 },
  { title: 'VIDEO', label: 'Watch', description: 'MV、アニメーション、ライブ、短編映像。', href: '/video', tone: '#6f6ab8', icon: Clapperboard },
  { title: 'ABOUT', label: 'Creator', description: 'Lokiと、横断する創作活動について。', href: '/about', tone: '#f4f4f4', icon: CircleUserRound },
  { title: 'LINKS', label: 'Connect', description: 'SNS、配信サービス、ストアへ。', href: '/#links', tone: '#9ea3b0', icon: ExternalLink },
];
