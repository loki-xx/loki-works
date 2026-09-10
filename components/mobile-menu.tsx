import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import { navigationItems } from '@/data/navigation';

export function MobileMenu() {
  return (
    <details className="mobile-menu">
      <summary aria-label="メニューを開く"><Menu aria-hidden="true" size={19} /></summary>
      <nav aria-label="モバイルナビゲーション">{navigationItems.map((item) => <Link key={item.href} href={item.href}>{item.label}<ArrowUpRight aria-hidden="true" size={15} /></Link>)}</nav>
    </details>
  );
}
