import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { musicLinks } from '@/data/links';
import { works } from '@/data/works';
import { WorkCard } from '@/components/work-card';

export const metadata: Metadata = { title: 'Music', description: 'LokiとMistoriaの音楽作品、ストリーミングリンク。' };
export default function MusicPage() {
  return <main><PageHero eyebrow="Listen / Sound / Song" title="MUSIC" description="物語を、音楽に。Mistoriaと低めの猫、ふたつの世界から生まれる音をまとめています。" />
    <section className="section-shell"><SectionTitle label="Streaming services" title="LISTEN" note="URL setup required" /><div className="service-list">{musicLinks.map((link) => link.href === '#' ? <span className="service-row" key={link.name} aria-disabled="true"><span>{link.name}</span><small>TODO / URL</small></span> : <a className="service-row" href={link.href} key={link.name} target="_blank" rel="noreferrer"><span>{link.name}</span><ArrowUpRight size={17} /></a>)}</div></section>
    <section className="section-shell"><SectionTitle label="Selected music" title="TRACKS" note="Music works" /><div className="works-grid">{works.filter((work) => work.category === 'MUSIC').map((work) => <WorkCard key={work.id} work={work} />)}</div></section>
  </main>;
}
