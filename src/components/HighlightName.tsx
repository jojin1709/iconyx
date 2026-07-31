export default function HighlightName({ name, query }: { name: string; query: string }) {
  if (!query) return <span>{name}</span>;
  const parts = name.split(new RegExp(`(${query})`, 'gi'));
  return (
    <span>
      {parts.map((p, i) => 
        p.toLowerCase() === query.toLowerCase()
          ? <strong key={i} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{p}</strong>
          : <span key={i}>{p}</span>
      )}
    </span>
  );
}
