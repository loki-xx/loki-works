import type { Metadata } from 'next';
import { Play } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { videos } from '@/data/videos';

export const metadata: Metadata = { title: 'Video', description: 'Mistoriaを中心としたMusic Video、Animation、Live、Short Video。' };
export default function VideoPage() {
  return <main><PageHero eyebrow="Music video / Animation / Live" title="WATCH" description="音楽を、映像に。MistoriaのMV、アニメーション、ライブ、ショートビデオへの入口。" />
    <section className="section-shell"><SectionTitle label="Featured videos" title="VIDEO" note="YouTube links required" /><div className="video-grid">{videos.map((video) => <article className="work-card" key={video.id}><div className="work-visual"><Play size={38} aria-hidden="true" /><small className="work-placeholder">IMAGE PLACEHOLDER</small></div><div className="work-content"><span className="work-category">{video.category}</span><h3>{video.title}</h3><p>TODO / YouTube URL</p></div></article>)}</div><span className="wide-link" aria-disabled="true">Open YouTube <span className="todo-pill">TODO URL</span></span></section>
  </main>;
}
