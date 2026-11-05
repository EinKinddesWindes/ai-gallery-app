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
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 24,
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 32px",
        boxSizing: "border-box",
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
