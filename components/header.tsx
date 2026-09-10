import Link from 'next/link';
import { MobileMenu } from './mobile-menu';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header className="site-header" id="top"><div className="header-inner">
      <Link className="brand" href="/" aria-label="Loki ホーム"><span className="brand-mark" aria-hidden="true"><span>L</span></span><span>LOKI<small>CREATOR PORTAL</small></span></Link>
      <Navigation /><MobileMenu />
    </div></header>
  );
}
