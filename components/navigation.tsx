import Link from 'next/link';
import { navigationItems } from '@/data/navigation';

export function Navigation() {
  return <nav className="desktop-nav" aria-label="メインナビゲーション">{navigationItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>;
}
