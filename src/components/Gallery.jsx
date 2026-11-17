
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
      <div className="gallery-grid">
        {filtered.map((item) => (
          <ImageCard
            key={item.id}
            item={item}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: 24, opacity: 0.75 }}>
          Keine Ergebnisse. Versuche einen anderen Suchbegriff.
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            padding: 0 20px;
          }
        }

        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
            padding: 0 24px;
          }
        }
      `}</style>
    </div>
  );
}
