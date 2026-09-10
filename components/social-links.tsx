import { creatorLinks } from '@/data/links';
import { SocialLink } from './social-link';

export function SocialLinks({ prominent = false }: { prominent?: boolean }) {
  return <div className={prominent ? 'social-grid' : 'service-list'}>{creatorLinks.map((link) => <SocialLink key={link.name} link={link} />)}</div>;
}
