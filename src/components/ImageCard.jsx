
import { useState } from "react";

export default function ImageCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        border: "none",
        borderRadius: 0,
        overflow: "hidden",
        background: "transparent",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 280,
          overflow: "hidden",
          background: "#f5f5f1",
        }}
      >
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
      </div>

      <div style={{ padding: "14px 0 20px" }}>
        <div
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "#344e41",
          }}
        >
          {item.title}
        </div>

        <div
          style={{
            fontSize: 13,
            color: "#888",
            marginTop: 5,
          }}
        >
          {item.book}
        </div>
      </div>
    </button>
  );
}
