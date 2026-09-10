type Props = { eyebrow: string; title: string; description: string };
export function PageHero({ eyebrow, title, description }: Props) {
  return <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div></section>;
}
