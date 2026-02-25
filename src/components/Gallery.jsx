import { useMemo } from "react";
import ImageCard from "./ImageCard";

export default function Gallery({ items, filter, query, onSelect }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return items.filter((img) => {
      const bookOk = filter === "Alle" ? true : img.book === filter;
      const text = `${img.title} ${img.description} ${img.book}`.toLowerCase();
      const qOk = q ? text.includes(q) : true;
      return bookOk && qOk;
    });
  }, [items, filter, query]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        {filtered.map((item) => (
          <ImageCard key={item.id} item={item} onClick={() => onSelect(item)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: 24, opacity: 0.75 }}>
          Keine Ergebnisse. Versuche einen anderen Suchbegriff.
        </div>
      )}
    </div>
  );
}