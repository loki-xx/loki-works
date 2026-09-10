import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="noise" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-index"><span>Creator / Japan</span><span>Music · Novel · Animation</span></div>
        <h1 className="hero-title" id="hero-title" aria-label="Loki"><span>L</span><span>O</span><span>K</span><span>I</span></h1>
        <div className="hero-bottom">
          <p className="hero-tagline">世界をつくる。<br />音にする。物語にする。</p>
          <p className="hero-disciplines">Mistoria / 低めの猫<br />Music / Novel / AI Creation</p>
          <Link className="circle-link" href="#portal" aria-label="コンテンツを見る"><ArrowDown aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
