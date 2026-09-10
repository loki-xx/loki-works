import Link from 'next/link';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { FeaturedCard } from '@/components/featured-card';
import { Hero } from '@/components/hero';
import { MistoriaMemberCard } from '@/components/mistoria-member-card';
import { PortalCard } from '@/components/portal-card';
import { SectionTitle } from '@/components/section-title';
import { SocialLinks } from '@/components/social-links';
import { WorkCard } from '@/components/work-card';
import { currentFeature } from '@/data/events';
import { mistoriaMembers } from '@/data/mistoria';
import { portalItems } from '@/data/portals';
import { works } from '@/data/works';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="section-shell section-compact" aria-labelledby="current-title">
        <div className="section-kicker-row">
          <p className="eyebrow" id="current-title">Current / Featured</p>
          <span className="hairline" aria-hidden="true" />
          <span className="issue-number">09—2026</span>
        </div>
        <FeaturedCard feature={currentFeature} />
      </section>

      <section className="section-shell" id="portal" aria-labelledby="portal-title">
        <SectionTitle id="portal-title" label="Explore the worlds" title="PORTAL" note="気になる扉から、どうぞ。" />
        <div className="portal-grid">
          {portalItems.map((item, index) => <PortalCard key={item.title} item={item} index={index} />)}
        </div>
      </section>

      <section className="mistoria-feature" aria-labelledby="mistoria-title">
        <div className="mistoria-signal" aria-hidden="true">M</div>
        <div className="section-shell mistoria-inner">
          <div className="mistoria-copy reveal">
            <p className="eyebrow accent-red">AI Girls Band / Main Project</p>
            <h2 id="mistoria-title" className="display-title mistoria-wordmark">MISTORIA</h2>
            <p className="mistoria-tagline">4人で笑って、4人で生きていく。</p>
            <p className="body-copy">音楽、アニメーションMV、物語。4人のキャラクターから広がる、Lokiのメインプロジェクト。</p>
            <div className="inline-actions">
              <Link className="text-link text-link-primary" href="/mistoria">Enter Mistoria <ArrowRight aria-hidden="true" size={16} /></Link>
              <Link className="text-link" href="/video"><Play aria-hidden="true" size={15} /> Watch videos</Link>
            </div>
          </div>
          <div className="member-grid reveal">
            {mistoriaMembers.map((member, index) => <MistoriaMemberCard key={member.name} member={member} index={index} />)}
          </div>
        </div>
      </section>

      <section className="books-teaser" aria-labelledby="books-title">
        <div className="section-shell books-teaser-inner">
          <div className="book-index" aria-hidden="true"><span>低</span><span>め</span><span>の</span><span>猫</span></div>
          <div className="books-copy reveal">
            <p className="eyebrow ink">Novel / Music / Web</p>
            <h2 id="books-title" className="display-title ink">BOOKS</h2>
            <p className="books-lead">夜とインク、その向こう側へ。</p>
            <p>創作サークル「低めの猫」。小説を起点に、音楽やCD、Webへと物語をひらいています。</p>
            <Link className="text-link ink-link" href="/books">Open the books <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <div className="book-spines reveal" aria-label="小説作品">
            <span className="book-spine"><small>01</small>代書屋いんくの依頼簿</span>
            <span className="book-spine"><small>02</small>青春異常論</span>
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="works-title">
        <SectionTitle id="works-title" label="Selected creations" title="WORKS" note="Music / Novel / MV / Animation" />
        <div className="works-grid">{works.slice(0, 6).map((work) => <WorkCard key={work.id} work={work} />)}</div>
        <Link className="wide-link" href="/music">View creative works <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section className="social-section" id="links" aria-labelledby="links-title">
        <div className="section-shell">
          <SectionTitle id="links-title" label="Find Loki online" title="LINKS" note="Listen / Watch / Read / Follow" />
          <SocialLinks prominent />
        </div>
      </section>
      <a className="scroll-top" href="#top" aria-label="ページ上部へ戻る">Top <ArrowDown aria-hidden="true" className="rotate-180" size={14} /></a>
    </main>
  );
}
