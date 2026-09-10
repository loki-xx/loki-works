import Link from 'next/link';

export function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><Link className="footer-logo" href="/">LOKI<small>LOW CAT / 低めの猫</small></Link><nav className="footer-links" aria-label="フッター"><Link href="/mistoria">Mistoria</Link><Link href="/about">About</Link><a href="https://x.com/lowcat_books" target="_blank" rel="noreferrer">X</a></nav><p className="copyright">© Loki</p></div></footer>;
}
