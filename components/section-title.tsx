type Props = { id?: string; label: string; title: string; note?: string };
export function SectionTitle({ id, label, title, note }: Props) {
  return <div className="section-title-wrap reveal"><div><p className="eyebrow">{label}</p><h2 className="display-title" id={id}>{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>;
}
