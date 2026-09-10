import { ArrowUpRight } from 'lucide-react';
import type { CreatorLink } from '@/data/links';

export function SocialLink({ link }: { link: CreatorLink }) {
  const Icon = link.icon;
  if (link.href === '#') return <span className="social-link" aria-disabled="true"><span className="social-link-name"><Icon aria-hidden="true" size={19} />{link.name}</span><span className="todo-pill">TODO</span></span>;
  return <a className="social-link" href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}><span className="social-link-name"><Icon aria-hidden="true" size={19} />{link.name}</span>{link.note && <small>{link.note}</small>}<ArrowUpRight aria-hidden="true" size={17} /></a>;
}
