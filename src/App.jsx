
import { useState } from "react";
import { images } from "./data/images";

import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";

import Gallery from "./components/Gallery";
import Modal from "./components/Modal";

const BOOKS = ["Alle", "Adilia", "Ein Kind des Windes", "Knödel Prinzessin"];

export default function App() {
  const [filter, setFilter] = useState("Alle");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <Home />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {BOOKS.map((b) => (
            <button
              key={b}
              onClick={() => setFilter(b)}
              style={{
                padding: "8px 12px",
                borderRadius: 999,
                border: "1px solid #ddd",
                background: filter === b ? "#111" : "white",
                color: filter === b ? "white" : "#111",
                cursor: "pointer",
              }}
            >
              {b}
            </button>
          ))}
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Suche (Titel, Buch, Beschreibung)…"
          style={{
            marginLeft: "auto",
            minWidth: 260,
            padding: "9px 12px",
            borderRadius: 12,
            border: "1px solid #ddd",
          }}
        />
      </div>

      <Gallery items={images} filter={filter} query={query} onSelect={setSelected} />

      <Books />
      <About />

      <Modal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}