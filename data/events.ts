export type FeaturedContent = {
  status: 'active' | 'archive' | 'hidden';
  type: 'event' | 'release';
  label: string;
  title: string;
  description: string;
  details: { label: string; value: string }[];
  href: string;
};

// EVENT終了後: status を 'archive' にすると ARCHIVE 表示、'hidden' にすると非表示用データになります。
// 最新MVへ変更する場合は type: 'release' とし、以下の文言・details を差し替えてください。
export const currentFeature: FeaturedContent = {
  status: 'active', type: 'event', label: 'Upcoming event', title: '文学フリマ大阪14',
  description: '創作サークル「低めの猫」で参加します。二つの物語を携えて、お待ちしています。',
  details: [
    { label: 'Date', value: '2026.09.13' }, { label: 'Booth', value: 'と-54' },
    { label: 'Circle', value: '低めの猫' }, { label: 'Works', value: '代書屋いんく / 青春異常論' },
  ],
  href: '/books',
};
