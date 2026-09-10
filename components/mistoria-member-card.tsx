import type { MistoriaMember } from '@/data/mistoria';

export function MistoriaMemberCard({ member, index }: { member: MistoriaMember; index: number }) {
  return <article className="member-card">
    {member.image ? <img className="member-image" src={member.image} alt={`${member.name} — ${member.role}`} loading="lazy" decoding="async" /> : <><div className="member-placeholder" aria-hidden="true">{member.name[0]}</div><span className="placeholder-label">IMAGE PLACEHOLDER</span></>}
    <div className="member-meta"><div><span className="eyebrow">0{index + 1}</span><h3 className="member-name">{member.name}</h3></div><span className="member-role">{member.role}</span></div>
  </article>;
}
