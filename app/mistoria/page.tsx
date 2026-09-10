import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MistoriaMemberCard } from '@/components/mistoria-member-card';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { mistoriaKeywords, mistoriaMembers } from '@/data/mistoria';

export const metadata: Metadata = { title: 'Mistoria', description: '4人組AIガールズバンド Mistoria。音楽、アニメMV、キャラクターと物語。' };
export default function MistoriaPage() {
  return <main><PageHero eyebrow="AI Girls Band / Music / Story" title="MISTORIA" description="4人で笑って、4人で生きていく。音楽と映像、キャラクターの物語が交差するAIガールズバンド。" />
    <section className="section-shell content-grid"><div className="sticky-label"><p className="eyebrow accent-red">The band</p><ul className="tag-list">{mistoriaKeywords.map((keyword) => <li key={keyword}>{keyword}</li>)}</ul></div><div className="rich-copy"><h2>FOUR VOICES,<br />ONE STORY.</h2><p>Mistoriaは、Hallu、Luca、Uno、Noahによる4人組バンド。楽曲、アニメーションMV、ライブ表現、そして物語をひとつの世界として展開していきます。</p><div className="member-grid">{mistoriaMembers.map((member, index) => <MistoriaMemberCard key={member.name} member={member} index={index} />)}</div><div className="inline-actions"><Link className="text-link text-link-primary" href="/music">Listen to music <ArrowRight size={16} /></Link><Link className="text-link" href="/video">Watch videos <ArrowRight size={16} /></Link></div></div></section>
    <section className="section-shell"><SectionTitle label="Coming next" title="STORY" note="PLACEHOLDER / future content" /><p className="body-copy">キャラクター紹介、楽曲、MV、物語をここから追加できる構造です。公開準備ができたコンテンツから、順番に扉が開きます。</p></section>
  </main>;
}
