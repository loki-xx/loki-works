import Link from 'next/link';
import type { Work } from '@/data/works';

export function WorkCard({ work }: { work: Work }) {
  return <Link className="work-card" href={work.href}><div className="work-visual">{work.image ? <img className="work-image" src={work.image} alt={`${work.title}の作品画像`} loading="lazy" decoding="async" /> : <><span aria-hidden="true">{work.category}</span><small className="work-placeholder">IMAGE PLACEHOLDER</small></>}</div><div className="work-content"><span className="work-category">{work.category}</span><h3>{work.title}</h3><p>{work.description}</p></div></Link>;
}
