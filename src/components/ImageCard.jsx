export default function ImageCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        border: "1px solid #eee",
        borderRadius: 16,
        overflow: "hidden",
        background: "white",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <div style={{ background: "#f6f6f6" }}>
        <img
          src={item.src}
          alt={item.title}
          style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
          loading="lazy"
        />
      </div>
      <div style={{ padding: 12, display: "grid", gap: 6 }}>
        <div style={{ fontWeight: 800 }}>{item.title}</div>
        <div style={{ fontSize: 12, opacity: 0.75 }}>{item.book}</div>
      </div>
    </button>
  );
}