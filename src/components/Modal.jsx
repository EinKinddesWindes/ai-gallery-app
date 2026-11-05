
export default function Modal({ item, onClose }) {
  if (!item) return null;

  const linkStyle = {
    display: "inline-block",
    padding: "10px 16px",
    background: "#344e41",
    color: "white",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 850,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "white",
          borderRadius: 0,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Schließen"
          style={{
            position: "sticky",
            top: 10,
            float: "right",
            margin: 10,
            zIndex: 3,
            border: "none",
            background: "#344e41",
            color: "white",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <img
          src={item.src}
          alt={item.title}
          style={{
            width: "100%",
            maxHeight: "55vh",
            objectFit: "contain",
            display: "block",
            background: "#f5f5f1",
          }}
        />

        <div
          style={{
            padding: "10px 24px 28px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#344e41",
              margin: "0 0 8px",
              fontSize: 26,
            }}
          >
            {item.title}
          </h2>

          {item.year && (
            <p style={{ color: "#777", margin: "0 0 20px" }}>
              Veröffentlichung: {item.year}
            </p>
          )}

          {!item.year && (
            <p style={{ color: "#777", margin: "0 0 20px" }}>
              Veröffentlichung in Vorbereitung
            </p>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {item.links?.amazon && (
              <a
                href={item.links.amazon}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Auf Amazon ansehen
              </a>
            )}

            {item.links?.youtube && (
              <a
                href={item.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Video auf YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
