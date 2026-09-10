export type WorkCategory = 'MUSIC' | 'NOVEL' | 'MV' | 'ANIMATION';
export type Work = { id: string; title: string; category: WorkCategory; description: string; href: string; image: string | null; imageHint: string };

export const works: Work[] = [
  { id: 'mistoria-music', title: 'Mistoria Music', category: 'MUSIC', description: '4人の物語を鳴らす楽曲群。', href: '/music', image: null, imageHint: '/images/works/mistoria-music.webp' },
  { id: 'ink', title: '代書屋いんくの依頼簿', category: 'NOVEL', description: '低めの猫による小説作品。', href: '/books', image: null, imageHint: '/images/books/ink.webp' },
  { id: 'seishun', title: '青春異常論', category: 'NOVEL', description: '低めの猫による小説作品。', href: '/books', image: null, imageHint: '/images/books/seishun.webp' },
  { id: 'mistoria-mv', title: 'Mistoria Music Video', category: 'MV', description: '音楽とキャラクターを映像へ。', href: '/video', image: null, imageHint: '/images/works/mistoria-mv.webp' },
  { id: 'animation', title: 'Animation Works', category: 'ANIMATION', description: 'AI表現を交えた短編映像。', href: '/video', image: null, imageHint: '/images/works/animation.webp' },
  { id: 'low-cat-music', title: '低めの猫 Music', category: 'MUSIC', description: '物語と連動する音楽・CD。', href: '/music', image: null, imageHint: '/images/works/low-cat-music.webp' },
];
