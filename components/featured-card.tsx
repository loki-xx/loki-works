import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { FeaturedContent } from '@/data/events';

export function FeaturedCard({ feature }: { feature: FeaturedContent }) {
  if (feature.status === 'hidden') return null;
  return <Link href={feature.href} className="featured-card reveal">
    <div className="featured-main"><span className="featured-label"><span className="live-dot" aria-hidden="true" />{feature.status === 'archive' ? 'Archive' : feature.label}</span><h2>{feature.title}</h2><p className="featured-meta">{feature.description}</p><ArrowUpRight aria-hidden="true" size={25} /></div>
    <div className="featured-data">{feature.details.map((detail) => <div className="featured-cell" key={detail.label}><small>{detail.label}</small><strong>{detail.value}</strong></div>)}</div>
  </Link>;
}
