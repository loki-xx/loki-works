import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PortalItem } from '@/data/portals';

export function PortalCard({ item, index }: { item: PortalItem; index: number }) {
  const Icon = item.icon;
  return <Link href={item.href} className="portal-card reveal" style={{ '--tone': item.tone } as React.CSSProperties}><div className="portal-card-top"><span>0{index + 1} / {item.label}</span><Icon className="portal-card-icon" aria-hidden="true" size={19} /></div><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="portal-card-arrow"><ArrowUpRight aria-hidden="true" size={18} /></span></Link>;
}
