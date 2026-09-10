import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { works } from '@/data/works';
import { WorkCard } from '@/components/work-card';
import { currentFeature } from '@/data/events';
import { FeaturedCard } from '@/components/featured-card';

export const metadata: Metadata = { title: 'Books / 低めの猫', description: '創作サークル「低めの猫」の小説、音楽、Webコンテンツ。' };
export default function BooksPage() {
  const books = works.filter((work) => work.category === 'NOVEL');
  return <main className="books-page"><PageHero eyebrow="Low Cat / Novel circle" title="BOOKS" description="紙とインク、夜の静けさ。創作サークル「低めの猫」がつくる、小説から始まる世界。" />
    <section className="section-shell"><SectionTitle label="Current event" title="EVENT" note="文学フリマ大阪14" /><FeaturedCard feature={currentFeature} /></section>
    <section className="section-shell"><SectionTitle label="Published stories" title="NOVELS" note="低めの猫" /><div className="works-grid">{books.map((work) => <WorkCard key={work.id} work={work} />)}</div><div className="rich-copy"><p>小説だけでなく、作品と連動した音楽・CD・Webコンテンツも制作しています。販売URLや詳細情報は、確定後に各作品データへ追加できます。</p></div></section>
  </main>;
}
