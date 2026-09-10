import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { SocialLinks } from '@/components/social-links';

export const metadata: Metadata = { title: 'About', description: '音楽、小説、映像を横断して創作するCreator Lokiについて。' };
const fields = ['MUSIC', 'NOVEL', 'VIDEO', 'AI CREATION'];
export default function AboutPage() {
  return <main><PageHero eyebrow="Creator / Loki / ロキ" title="ABOUT" description="Music, Novel, Animation and AI Creation." />
    <section className="section-shell content-grid"><div className="sticky-label"><p className="eyebrow">Loki / ロキ</p></div><div className="rich-copy"><h2>ONE WORLD,<br />MANY FORMS.</h2><p>音楽、小説、映像を横断しながら、ひとつの世界をいろいろな形で作っています。</p><p>AIガールズバンド「Mistoria」、創作サークル「低めの猫」を中心に活動。</p><ul className="tag-list">{fields.map((field) => <li key={field}>{field}</li>)}</ul></div></section>
    <section className="social-section"><div className="section-shell"><SectionTitle label="Connect" title="LINKS" note="@lowcat_books" /><SocialLinks prominent /></div></section>
  </main>;
}
