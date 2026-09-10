export type VideoCategory = 'MUSIC VIDEO' | 'ANIMATION' | 'LIVE' | 'SHORT VIDEO';
export type VideoItem = { id: string; title: string; category: VideoCategory; href: string; image: string | null; imageHint: string };

// TODO: 実際の作品名・YouTube URL・サムネイルへ差し替えてください。
export const videos: VideoItem[] = [
  { id: 'mv-placeholder', title: 'Mistoria Music Video', category: 'MUSIC VIDEO', href: '#', image: null, imageHint: '/images/works/video-01.webp' },
  { id: 'animation-placeholder', title: 'Mistoria Animation', category: 'ANIMATION', href: '#', image: null, imageHint: '/images/works/video-02.webp' },
  { id: 'live-placeholder', title: 'Mistoria Live', category: 'LIVE', href: '#', image: null, imageHint: '/images/works/video-03.webp' },
  { id: 'short-placeholder', title: 'Mistoria Short Video', category: 'SHORT VIDEO', href: '#', image: null, imageHint: '/images/works/video-04.webp' },
];
