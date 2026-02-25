export default function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "grid",
        placeItems: "center",
        padding: 16,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: 16,
          maxWidth: 900,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", padding: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{item.title}</div>
            <div style={{ opacity: 0.7 }}>{item.book}</div>
          </div>
          <button onClick={onClose} style={{ fontSize: 16, padding: "6px 10px" }}>
            ✕
          </button>
        </div>

        <div style={{ background: "#f6f6f6" }}>
          <img
            src={item.src}
            alt={item.title}
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
          />
        </div>

        <div style={{ padding: 16, display: "grid", gap: 10 }}>
          <div>{item.description}</div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {item.tools?.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  padding: "4px 8px",
                  borderRadius: 999,
                  background: "#efefef",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href={item.links?.amazon} target="_blank" rel="noreferrer">
              Auf Amazon ansehen →
            </a>
            <a href={item.links?.youtube} target="_blank" rel="noreferrer">
              YouTube →
            </a>
          </div>

          <div style={{ fontSize: 12, opacity: 0.75 }}>
            Hinweis: Aus urheberrechtlichen Gründen werden nur ausgewählte Illustrationen gezeigt.
          </div>
        </div>
      </div>
    </div>
  );
}